import { Component, OnInit} from '@angular/core';
import { Circle } from '../models/Circle';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})



export class MainComponent implements OnInit {

public activeCheck:string = "0";
public circleList: Circle[] = [];

  constructor() {}

  ngOnInit(): void {
    this.GetDataFromDB('0');
  }

  public GetDataFromDB(score: string) {
   
    // local counter
    let filterCounter: number = 0;

    // convert score to int
   let intScore:number= Number(score);

   this.circleList= [];
    this.db.forEach((elementI: Circle) => {

      if (filterCounter < intScore) {
        this.circleList.push(elementI);
        filterCounter++;
      }
      if (intScore == 0) {
        this.circleList.push(elementI);
      }
    });

    //set style to filter button
    this.activeCheck=score;
  }

  
  // Card Show/Hide Toogle
  show: {[key: number]:boolean} = {};
  count: number = 0;

  openSelect(id: number) {
    this.count++;
    if (this.count >= 2) {
      this.close();
    } else {
      this.show[id] =!this.show[id];
    }
  }

  close(){
    window.location.reload();
  }

  




  // dataBase 

   db: any = [
    {
      id: 1,
      color: '#a49cd6',
      tittel: ' ipsum dolor',
      category: ' mer en 30 ',
      text: 'Lorem,  ipsum dolor sit amet consectetur adipisicing elit. Suscipit sed quisquam minima ea maxime consequatur perferendis ullam recusandae debitis mollitia voluptatibus aspernatur, quos odit placeat repellendus unde maiores natus quasi? voluptatibus aspernatur, quos odit placeat repellendus unde maiores natus quasi?',
    },
    {
      id: 2,
      color: '#b1e6d9',
      tittel: ' ipsum dolor',
      category: ' = 30 ',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit sed quisquam minima ea maxime consequatur perferendis ullam recusandae debitis mollitia voluptatibus aspernatur, quos odit placeat repellendus unde maiores natus quasi?',
    },
    {
      id: 3,
      color: '#d01439',
      tittel: ' ipsum dolor',
      category: ' > 30 ',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque animi dolor ad beatae modi accusantium at repellendus, rerum iusto veritatis fugiat iure repudiandae corporis eius delectus reprehenderit! Exercitationem harum culpa nobis non vero officiis! Non voluptas, neque eligendi aliquam magnam similique animi vel! Dolores molestiae eum consequatur, repellat modi itaque.',
    },
    {
      id: 4,
      color: '#54ad97',
      tittel: ' ipsum dolor',
      category: ' > 100 ',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quia, aliquid impedit vero delectus veritatis inventore facere saepe sequi, reiciendis corporis rem, non optio amet. Nam quos dolorum magni. Ad neque, rerum error veritatis reprehenderit impedit repudiandae aliquid hic quidem quos enim possimus officia dicta corrupti ipsam saepe magni minus doloremque odit commodi deserunt eos. Explicabo beatae, facilis enim obcaecati eaque delectus sit molestias quasi placeat nobis repudiandae exercitationem nam aliquam, tempore eveniet nulla! Laborum nobis earum voluptatum, quod ratione qui labore quisquam reiciendis, sunt inventore libero, assumenda quam? Consequuntur, magni laborum obcaecati placeat repellendus a modi praesentium impedit perspiciatis.',
    },
    {
      id: 5,
      color: '#b2d69c',
      tittel: ' ipsum dolor',
      category: ' < 30 ',
      text: 'Lorem,  voluptatibus aspernatur, quos odit placeat repellendus unde maiores natus quasi?',
    },
    {
      id: 6,
      color: '#9a2174',
      tittel: ' ipsum dolor',
      category: ' < 30 ',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit sed quisquam minima ea maxime consequatur perferendis ullam recusandae debitis mollitia voluptatibus aspernatur, quos odit placeat repellendus unde maiores natus quasi?',
    },
    {
      id: 7,
      color: '#f28a21',
      tittel: ' sit amet minima ea maxime  ',
      category: ' < 30 ',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit sed quisquam minima ea maxime consequatur perferendis ullam recusandae debitis mollitia voluptatibus aspernatur, quos odit placeat repellendus unde maiores natus quasi?',
    },
    {
      id: 8,
      color: '#b97ec1',
      tittel: ' ipsum dolor',
      category: ' > 100 ',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quia, aliquid impedit vero delectus veritatis inventore facere saepe sequi, reiciendis corporis rem, non optio amet. Nam quos dolorum magni. Ad neque, rerum error veritatis reprehenderit impedit repudiandae aliquid hic quidem quos enim possimus officia dicta corrupti ipsam saepe magni minus doloremque odit commodi deserunt eos. Explicabo beatae, facilis enim obcaecati eaque delectus sit molestias quasi placeat nobis repudiandae exercitationem nam aliquam, tempore eveniet nulla! Laborum nobis earum voluptatum, quod ratione qui labore quisquam reiciendis, sunt inventore libero, assumenda quam? Consequuntur, magni laborum obcaecati placeat repellendus a modi praesentium impedit perspiciatis.',
    },
    {
      id: 9,
      color: '#d6b99c',
      tittel: ' Suscipit sed quisquam ',
      category: ' < 30 ',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit sed quisquam minima ea maxime consequatur perferendis ullam recusandae debitis mollitia voluptatibus aspernatur, quos odit placeat repellendus unde maiores natus quasi?',
    },
    {
      id: 10,
      color: '#cbcb64',
      tittel: ' Suscipit sed quisquam ',
      category: ' < 30 ',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit sed quisquam minima ea maxime consequatur perferendis ullam recusandae debitis mollitia voluptatibus aspernatur, quos odit placeat repellendus unde maiores natus quasi?',
    },
    {
      id: 11,
      color: '#6a061d',
      tittel: ' ipsum dolor',
      category: ' < 30 ',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit sed quisquam minima ea maxime consequatur perferendis ullam recusandae debitis mollitia voluptatibus aspernatur, quos odit placeat repellendus unde maiores natus quasi?',
    },
    {
      id: 12,
      color: '#729dc7',
      tittel: ' dolor sit amet consectetur',
      category: ' < 30 ',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit sed quisquam minima ea maxime consequatur perferendis ullam recusandae debitis mollitia voluptatibus aspernatur, quos odit placeat repellendus unde maiores natus quasi?',
    },
    {
      id: 13,
      color: '#666476',
      tittel: ' sit amet',
      category: ' > 100 ',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quia, aliquid impedit vero delectus veritatis inventore facere saepe sequi, reiciendis corporis rem, non optio amet. Nam quos dolorum magni. Ad neque, rerum error veritatis reprehenderit impedit repudiandae aliquid hic quidem quos enim possimus officia dicta corrupti ipsam saepe magni minus doloremque odit commodi deserunt eos. Explicabo beatae, facilis enim obcaecati eaque delectus sit molestias quasi placeat nobis repudiandae exercitationem nam aliquam, tempore eveniet nulla! Laborum nobis earum voluptatum, quod ratione qui labore quisquam reiciendis, sunt inventore libero, assumenda quam? Consequuntur, magni laborum obcaecati placeat repellendus a modi praesentium impedit perspiciatis.',
    },
    {
      id: 14,
      color: '#898919',
      tittel: ' minima ea maxime ',
      category: ' < 30 ',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit sed quisquam minima ea maxime consequatur perferendis ullam recusandae debitis mollitia voluptatibus aspernatur, quos odit placeat repellendus unde maiores natus quasi?',
    },
    {
      id: 15,
      color: '#c5a9ae',
      tittel: ' ipsum dolor',
      category: ' < 30 ',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit sed quisquam minima ea maxime consequatur perferendis ullam recusandae debitis mollitia voluptatibus aspernatur, quos odit placeat repellendus unde maiores natus quasi?',
    },
    {
      id: 16,
      color: '#687370',
      tittel: ' ipsum dolor',
      category: ' < 30 ',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit sed quisquam minima ea maxime consequatur perferendis ullam recusandae debitis mollitia voluptatibus aspernatur, quos odit placeat repellendus unde maiores natus quasi?',
    },
    {
      id: 17,
      color: '#666476',
      tittel: ' adipisicing elit',
      category: ' < 30 ',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit sed quisquam minima ea maxime consequatur perferendis ullam recusandae debitis mollitia voluptatibus aspernatur, quos odit placeat repellendus unde maiores natus quasi?',
    },
    {
      id: 18,
      color: '#6a061d',
      tittel: ' ipsum dolor',
      category: ' < 30 ',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit sed quisquam minima ea maxime consequatur perferendis ullam recusandae debitis mollitia voluptatibus aspernatur, quos odit placeat repellendus unde maiores natus quasi?',
    },
    {
      id: 19,
      color: '#666476',
      tittel: ' ipsum dolor',
      category: ' < 30 ',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit sed quisquam minima ea maxime consequatur perferendis ullam recusandae debitis mollitia voluptatibus aspernatur, quos odit placeat repellendus unde maiores natus quasi?',
    },
    {
      id: 20,
      color: '#d6b99c',
      tittel: ' Suscipit sed quisquam ',
      category: ' < 30 ',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit sed quisquam minima ea maxime consequatur perferendis ullam recusandae debitis mollitia voluptatibus aspernatur, quos odit placeat repellendus unde maiores natus quasi?',
    },
  ];

}
