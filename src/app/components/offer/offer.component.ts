import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { ConfigurationService } from '../../services/configuration.service';
import { OfferService } from '../../services/offer.service';
import { Country } from 'src/app/models/country.type';
import { Offer } from 'src/app/models/offer.type';
import { MatSnackBar } from '@angular/material/snack-bar';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
  myGroup = new FormGroup({
    countryControl: new FormControl('', [Validators.required]),
    stateControl: new FormControl('', [Validators.required]),
    postcodeControl: new FormControl('', [Validators.required]),
    fullNameControl: new FormControl('', [Validators.required])
  });
  matcher = new MyErrorStateMatcher();
  countries: Country[] = [];
  states = this.config.states;
  isAU = true;

  constructor(
    private config: ConfigurationService,
    private offerService: OfferService,
    private snackBar: MatSnackBar,
    private router: Router) {
  }

  ngOnInit(): void {
    this.offerService.getCountries()
      .subscribe((response: Country[]) => {
        this.countries = response;
      });
  }

  onCountrySelected(event: Event) {
    this.isAU = ((event.target as HTMLSelectElement).value === 'AU');
    if (this.isAU)
    {
      this.isAU = true;
      this.myGroup.controls['stateControl'].enable();
      this.myGroup.controls['postcodeControl'].enable();
      this.myGroup.controls['stateControl'].reset();
      this.myGroup.controls['postcodeControl'].reset();
    }
    else
    {
      this.isAU = false;
      this.myGroup.controls['stateControl'].setValue(null);
      this.myGroup.controls['postcodeControl'].setValue(null);
      this.myGroup.controls['stateControl'].disable();
      this.myGroup.controls['postcodeControl'].disable();
    }
  }

  submit() {
    const offer: Offer = new Offer({
      country: this.myGroup.controls['countryControl'].value,
      state: this.myGroup.controls['stateControl'].value,
      postcode: this.myGroup.controls['postcodeControl'].value,
      fullName: this.myGroup.controls['fullNameControl'].value
    });
    localStorage.setItem('offer', JSON.stringify(offer, null, 2));
    this.snackBar.open('Great Job', 'Success');
    this.router.navigate(['success']);
  }

}
