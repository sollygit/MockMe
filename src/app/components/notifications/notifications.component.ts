import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  loading = false;
  enableButton = true;
  templates: any[] = [];

  public notificationRequest: string;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getTemplates()
      .subscribe((response: any[]) => {
        this.templates = response;
      });
  }

  fetch() {
    this.dataService.fetchRequest()
      .subscribe(response => {
        this.notificationRequest = JSON.stringify(response, null, 2);
      });
  }

  send() {
    this.dataService.sendNotification(this.notificationRequest)
      .subscribe(() => {
        this.toggleLoading(true);
      });
  }

  toggleLoading(isCompleted: boolean) {
    this.enableButton = isCompleted;
    this.loading = !isCompleted;
  }

}
