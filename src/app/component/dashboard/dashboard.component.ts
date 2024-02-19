import { Component, OnInit } from '@angular/core';
import { Job } from '../../model/job';
import { AuthService } from '../../shared/auth.service';
import { DataService } from '../../shared/data.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.sass',
})
export class DashboardComponent implements OnInit {
  jobList: Job[] = [];
  addjobform!: FormGroup;

  constructor(
    private auth: AuthService,
    private data: DataService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.addjobform = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      company: ['', Validators.required],
      location: ['', Validators.required],
      minSalary: [0, Validators.required],
      maxSalary: [0, Validators.required],
    });
  }

  getControl(name: string) {
    return this.addjobform.get(name) as FormControl;
  }

  logout() {
    this.auth.logout();
  }

  getAllJobs() {
    this.data.getAllJobs().subscribe(
      (res) => {
        this.jobList = res.map((e: any) => {
          const data = e.payload.doc.data();
          data.id = e.payload.doc.id;
          return data;
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }

  addJob() {
    const newJob: Job = {
      id: '',
      title: this.addjobform.value.title,
      description: this.addjobform.value.description,
      category: this.addjobform.value.category,
      posted: new Date(),
      company: this.addjobform.value.company,
      location: this.addjobform.value.location,
      minSalary: this.addjobform.value.minSalary,
      maxSalary: this.addjobform.value.maxSalary,
    };

    this.data.addJob(newJob);
  }

  deleteJob(job: Job) {
    this.data.deleteJob(job);
  }
}
