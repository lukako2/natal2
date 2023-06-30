import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  
  public imgList: string[] = [
    'https://i.ibb.co/6FrsyFY/natl-DSC00442.jpg',
    'https://i.ibb.co/FWjFnzd/verysmolnatl.jpg',
    'https://i.ibb.co/26zhTNb/DSC00958.jpg',
    'https://i.ibb.co/qmMVFz8/DSC01016.jpg',
    'https://i.ibb.co/9HGH9P2/DSC00956.jpg',
    'https://i.ibb.co/WN9rRCH/draft-Natl.jpg',
    'https://i.ibb.co/T86q0HS/DSC00514.jpg',
    'https://i.ibb.co/YWCD5Rc/DSC00793.jpg',
    'https://i.ibb.co/xgf7ThN/natalaa.jpg',
    'https://i.ibb.co/qxLkz5g/DSC05322-v2.jpg',
    'https://i.ibb.co/cYRMHHp/tatalebi-2.jpg',
    'https://i.ibb.co/mX6b6M4/DSC00539.jpg',
    'https://i.ibb.co/1rmmNsC/DSC00527.jpg',
  ];

  public randomNumber: string = '';

  ngOnInit(): void {
    this.randomNumber = this.getRandomImage();
    this.preloadImages(this.imgList);
  }

  getRandomImage(): string {
    return this.imgList[Math.floor(Math.random() * this.imgList.length)];
  }

  preloadImages(images: string[]): void {
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }
}
