import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { NotificationRequest } from 'src/app/models/notification-request.type';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {
  loading = false;
  enableButton = true;
  templates: any[] = [];
  
  public notificationRequest: NotificationRequest = new NotificationRequest({ body: '' });

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getTemplates()
      .pipe()
      .subscribe((response: any[]) => {
        this.templates = response;
      });
  }

  toggleLoading(isCompleted: boolean) {
    this.enableButton = isCompleted;
    this.loading = !isCompleted;
  }

  fetch() {
    this.dataService.fetchRequest()
      .subscribe(response => {
        this.notificationRequest.body = JSON.stringify(response, null, 2);
      });
  }

  send() {
    this.dataService.sendNotification(this.notificationRequest)
      .subscribe(() => {
        this.toggleLoading(true);
      });
  }

}
