import { Component, OnInit } from '@angular/core';
import { connect } from 'ts-nats';

@Component({
  selector: 'app-nats-message',
  templateUrl: './nats-message.component.html',
  styleUrls: ['./nats-message.component.scss'],
})
export class NatsMessageComponent implements OnInit {
  constructor() {}

  async ngOnInit(): Promise<void> {
    const servers = [{}, { port: 4222 }, { servers: 'nats://185.142.34.37' }];
    try {
      await connect({
        servers: ['nats://demo.nats.io:4222', 'tls://demo.nats.io:4443'],
      });
    } catch (e) {
      console.log(`error connecting ${JSON.stringify(e)}`);
    }
  }
}
