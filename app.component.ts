import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: Post[]
  progressFlag: boolean
  comments: any[]
  constructor(public http: HttpClient) {
    this.comments = []
    for (var i = 0; i < 100; i++) {
      this.comments.push()
    }

    this.progressFlag = false
    this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(res => {
        this.posts = res
        this.progressFlag = true
      })
  }

  getComments(id, i) {
    this.http.get<Comment[]>('https://jsonplaceholder.typicode.com/comments?postId=' + id)
      .subscribe(res => {
        this.comments[i] = res
      })
  }

}

interface Post {
  userId?: number
  id?: number
  title?: string
  body?: string
}

interface Comment {
  postId?: number
  id?: number
  body?: string
  name?: string
  email?: string
}