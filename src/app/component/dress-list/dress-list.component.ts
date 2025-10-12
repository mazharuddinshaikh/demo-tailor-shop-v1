import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DressStatsService } from '../../service/dress-stats.service';
import { DressStats } from '../../model/dress-stats';

@Component({
  selector: 'app-dress-list',
  imports: [],
  templateUrl: './dress-list.component.html',
  styleUrl: './dress-list.component.css'
})
export class DressListComponent implements OnInit {
  dressStatsService: DressStatsService = inject(DressStatsService);
  dressStatsList: DressStats[] = [];
  ngOnInit(): void {
    this.loadDress();
  }

  loadDress() {
    this.dressStatsService.loadDress().forEach(dressStats => this.dressStatsList.push(dressStats));
  }

}
