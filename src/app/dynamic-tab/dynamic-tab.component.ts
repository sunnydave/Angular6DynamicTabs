import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import {TabDirectiveDirective} from '../tab-directive.directive';
import {TabItem} from '../models/tab-item';
import {SkeletonComponent} from '../skeleton.component';

@Component({
  selector: 'app-dynamic-tab',
  templateUrl: './dynamic-tab.component.html',
  styleUrls: ['./dynamic-tab.component.scss']
})
export class DynamicTabComponent implements OnInit{
  @Input() tab;
  @Input() tabIndex;
  @ViewChild(TabDirectiveDirective, {static: true}) tabDirective: TabDirectiveDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    const tab: TabItem = this.tab;
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      tab.component
    );
    const viewContainerRef = this.tabDirective.viewContainerRef;
    const componentRef = viewContainerRef.createComponent(componentFactory);
    (componentRef.instance as SkeletonComponent).data = tab.data;
  }

}
