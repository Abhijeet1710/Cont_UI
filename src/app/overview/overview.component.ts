import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor() { }

  my = [
    {
      name: "Github API",
      description: "๐ GitHub Profile is a complete ๐Kotlin-Android ๐ฑ application built to demonstrate the use of Modern development tools with best practices implementation",
      tech: "Kotlin",
      likes: 20
    },
    {
      name: "Github API",
      description: "๐ GitHub Profile is a complete ๐Kotlin-Android ๐ฑ application built to demonstrate the use of Modern development tools with best practices implementation",
      tech: "Kotlin",
      likes: 20
    },
    {
      name: "Github API",
      description: "๐ GitHub Profile is a complete ๐Kotlin-Android ๐ฑ application built to demonstrate the use of Modern development tools with best practices implementation",
      tech: "Kotlin",
      likes: 20
    },
    {
      name: "Github API",
      description: "๐ GitHub Profile is a complete ๐Kotlin-Android ๐ฑ application built to demonstrate the use of Modern development tools with best practices implementation",
      tech: "Kotlin",
      likes: 20
    }

  ]

  myPart = [
    {
      name: "Github API",
      description: "๐ GitHub Profile is a complete ๐Kotlin-Android ๐ฑ application built to demonstrate the use of Modern development tools with best practices implementation ๐ GitHub Profile is a complete ๐Kotlin-Android ๐ฑ application built to demonstrate the use of Modern development tools with best practices implementation",
      tech: "Kotlin",
      likes: 20
    },
    {
      name: "Github API",
      description: "๐ GitHub Profile is a complete ๐Kotlin-Android ๐ฑ application built to demonstrate the use of Modern development tools with best practices implementation",
      tech: "Kotlin",
      likes: 20
    }

  ]


  ngOnInit(): void {
  }

}
