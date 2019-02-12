import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalDirective } from '../../node_modules/ngx-bootstrap';
import { Question } from './question-model';
import { ToastrService } from 'ngx-toastr';




@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	isQuestionCardShow: boolean = false;
	totalAnswered: number = 0;
	rightAnswer: number;
	currentIndex:number;
	questions:any;
	currentQuestion:any;
	questionObj = new Question();
	@ViewChild('submitModal') submitModal: ModalDirective;
	constructor( private toastr: ToastrService) { 
		this.questions = [
			{
			  id : 1,
			  question: 'Which is the largest country in the world by population?',
			  options: ['India', 'USA','China','Russia'],
			  answer : 2
			},
			{
			id : 2,
			question: 'When did the second world war end?',
			options: ['1945', '1939','1944','1942'],
			answer : 0
			},
			{
			id : 3,
			question: 'Which was the first country to issue paper currency?',
			options: ['USA', 'France','Italy','China'],
			answer : 3
			},
			{
			id : 4,
			question: 'Which city hosted the 1996 Summer Olympics?',
			options: ['Atlanta', 'Sydney','Athens','Beijing'],
			answer : 0
			},
			{
			id : 5,
			question: 'Who invented telephone?',
			options: ['Albert Einstein', 'Alexander Graham Bell','Isaac Newton','Marie Curie'],
			answer : 1
			},
		  ];

		  this.currentIndex=0;
		  this.currentQuestion= this.questions[this.currentIndex];
	}
	  next(){
		this.currentIndex = this.currentIndex + 1;
		this.currentQuestion= this.questions[this.currentIndex];
	  }
	submitTest() {
		this.rightAnswer = 0;
		this.totalAnswered = 0;
		for (let i = 0; i < this.questions.length; i++) {
			if ("selected" in this.questions[i] && (this.questions[i]["selected"] != null)) {
				this.totalAnswered++;
				if (this.questions[i]["selected"] == this.questions[i]["answer"]) {
					this.rightAnswer++;
				}
			}

		}
		this.submitModal.show();

	}

	startQuiz() {
		this.currentIndex=0;
		this.currentQuestion= this.questions[this.currentIndex];
		this.isQuestionCardShow = true;

	}
	HomePage() {
		this.isQuestionCardShow = false;
	}

}
