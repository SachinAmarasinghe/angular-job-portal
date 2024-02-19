import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Job } from '../model/job';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private afs: AngularFirestore) {}

  addJob(job: Job) {
    job.id = this.afs.createId();
    return this.afs.collection('/jobs').add(job);
  }

  getAllJobs() {
    return this.afs.collection('/jobs').snapshotChanges();
  }

  deleteJob(job: Job) {
    return this.afs.doc('/jobs/' + job.id).delete();
  }

  updateJob(job: Job) {
    this.deleteJob(job);
    this.addJob(job);
  }
}
