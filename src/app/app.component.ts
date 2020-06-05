import {Component, OnInit, ComponentFactoryResolver} from '@angular/core';
import {TabService} from './services/tab.service';
import {TabItem} from './models/tab-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'TabbedApplication';
  selectedEntity = 'none';
  tabs: TabItem[] = [];
  activeTab = 'default';
  defaultTab = 'default';
  constructor(private tabService: TabService, private componentFactoryResolver: ComponentFactoryResolver) {

  }

  dropdownClicked(selectedValue): void {
    this.selectedEntity = selectedValue;
  }

  ngOnInit(): void {
    if (this.tabService.subsVar === undefined){
      this.tabService.subsVar = this.tabService.invokeTabAddFunction.subscribe((newTab: TabItem) => {
        console.log(newTab);
        this.tabs.push(newTab);
        this.activeTab = newTab.tabId;
      });
      this.tabService.invokeTabRemoveFunction.subscribe((tabIndex: number) => {
        this.tabs.splice(tabIndex, 1);
        this.activeTab = this.defaultTab;
      });
    }
  }

  removeTab(event: MouseEvent, index: number): void {
    this.tabs.splice(index, 1);
    this.activeTab = this.defaultTab;
    event.preventDefault();
    event.stopImmediatePropagation();
  }
}
