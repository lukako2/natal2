import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  public natlImgList: string[] = [
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
    'https://i.ibb.co/WWWqfDd/DSC00442.jpg',
    'https://i.ibb.co/zr22B2Z/DSC01093.jpg',
    'https://i.ibb.co/ygHJn47/DSC01092.jpg',
    'https://i.ibb.co/JphmhNX/DSC01083.jpg',
    'https://i.ibb.co/qWx3MRv/DSC01053.jpg',
    'https://i.ibb.co/GdvXRbz/DSC01051.jpg',
    'https://i.ibb.co/WsnM1jH/DSC01030.jpg',
    'https://i.ibb.co/PgQkkkD/DSC01016.jpg',
    'https://i.ibb.co/nzYhMyy/DSC01011.jpg',
    'https://i.ibb.co/dkGg4vn/DSC01007.jpg',
    'https://i.ibb.co/5GGq09Y/DSC01005.jpg',
    'https://i.ibb.co/9Yx9d44/DSC00988.jpg',
    'https://i.ibb.co/Tc4fJj1/DSC00984.jpg',
    'https://i.ibb.co/vZf09Y0/DSC00958.jpg',
    'https://i.ibb.co/3pwvFPG/DSC00928.jpg',
    'https://i.ibb.co/jrZKyYw/DSC00927.jpg',
    'https://i.ibb.co/hHLqcK8/DSC00925.jpg',
    'https://i.ibb.co/JqkyJhZ/DSC00891.jpg',
    'https://i.ibb.co/m80yVVx/DSC00885.jpg',
    'https://i.ibb.co/B6yMZ48/DSC00882.jpg',
    'https://i.ibb.co/JqMd8CD/DSC00799.jpg',
    'https://i.ibb.co/zXv4JkX/DSC00793.jpg',
    'https://i.ibb.co/yk15YPh/DSC00714.jpg',
    'https://i.ibb.co/GpK7mCQ/DSC00713.jpg',
    'https://i.ibb.co/0hdZrbX/DSC00712.jpg',
    'https://i.ibb.co/ww5zTLJ/DSC00710.jpg',
    'https://i.ibb.co/vhDdQqX/DSC00706.jpg',
    'https://i.ibb.co/j6Pm5V5/DSC00703.jpg',
    'https://i.ibb.co/DGLbGQm/DSC00614.jpg',
    'https://i.ibb.co/gV4gxzx/DSC00597.jpg',
    'https://i.ibb.co/D7gMnfL/DSC00515.jpg',
    'https://i.ibb.co/2Z6j6VT/DSC00514.jpg',
    'https://i.ibb.co/G5Hk620/DSC00512.jpg',
    'https://i.ibb.co/fCQxFvz/DSC00499.jpg',
    'https://i.ibb.co/f8mRRy5/DSC05322.jpg',
    'https://i.ibb.co/f4qvTgr/DSC05362.jpg',
    'https://i.ibb.co/87bGKrY/DSC05360.jpg',
    'https://i.ibb.co/dp53HG8/DSC05358.jpg',
    'https://i.ibb.co/fxyNb4x/DSC05092.jpg',
    'https://i.ibb.co/JC9cVwT/DSC05075.jpg',
    'https://i.ibb.co/hXhhLLp/DSC05073.jpg',
  ];
  public randomNumber: string =
    this.natlImgList[Math.floor(Math.random() * 46)];
  public randomNumber2: string =
    this.natlImgList[Math.floor(Math.random() * 46)];
  public isImageExpanded = false;
  public expandedImageUrl = '';
  imgResize(img: string): void {
    this.expandedImageUrl = img;
    this.isImageExpanded = true;
  }

  closeImage(): void {
    this.isImageExpanded = false;
  }

  public lukImgList: string[] = [
    'https://i.ibb.co/6yVHJ5x/DSC05190.jpg',
    'https://i.ibb.co/P58LqHv/DSC05787.jpg',
    'https://i.ibb.co/tJL88nX/DSC05788.jpg',
    'https://i.ibb.co/R7cPVfH/DSC05790.jpg',
    'https://i.ibb.co/8Pt7QH4/DSC05528.jpg',
    'https://i.ibb.co/rxWjrCQ/DSC05719.jpg',
    'https://i.ibb.co/9rTyRTq/DSC01099.jpg',
    'https://i.ibb.co/X2Qkp40/DSC00476.jpg',
    'https://i.ibb.co/zbFWtxv/mexd2.jpg',
    'https://i.ibb.co/4PZt0XM/ra.jpg',
    'https://i.ibb.co/PWYPGrd/DSC01054.jpg',
    'https://i.ibb.co/G09qSwV/DSC01099.jpg',
    'https://i.ibb.co/DWc9qDS/GRIMREAPER.jpg',
    'https://i.ibb.co/dPvcsyz/iamsurreal.jpg',
    'https://i.ibb.co/L52bWtF/WIN-20230531-22-27-40-Pro2.jpg',
    'https://i.ibb.co/dt3gjBm/havingfunwith-Ai.jpg',
    
  ];

  public randomNumber3: string =
    this.lukImgList[Math.floor(Math.random() * 15)];
  public randomNumber4: string =
    this.lukImgList[Math.floor(Math.random() * 15)];

  public togetherImgList: string[] = [
    'https://i.ibb.co/GxhhGTD/DSC01080.jpg',
    'https://i.ibb.co/18MPwFG/DSC05812.jpg',
    'https://i.ibb.co/vY401LN/DSC00533.jpg',
    'https://i.ibb.co/s9HX5qm/DSC00951.jpg',
    'https://i.ibb.co/cy4TjMP/DSC00949.jpg',
    'https://i.ibb.co/rpVw40g/DSC00948.jpg',
    'https://i.ibb.co/YyyHRgF/DSC00900.jpg',
    'https://i.ibb.co/GF70yPL/DSC00874.jpg',
    'https://i.ibb.co/Y29vJc4/DSC05805.jpg',
    'https://i.ibb.co/myKB9Z4/DSC05802.jpg',
    'https://i.ibb.co/vkDy4sJ/DSC05080.jpg',
    'https://i.ibb.co/mFMK6x4/DSC05813.jpg',
    'https://i.ibb.co/zV1TdXq/DSC05812.jpg',
    'https://i.ibb.co/NmBkR9X/DSC05808.jpg',
    
  ];

  public randomNumber5: string =
    this.togetherImgList[Math.floor(Math.random() * 13)];
  public randomNumber6: string =
    this.togetherImgList[Math.floor(Math.random() * 13)];

    activeContainer: string = '';

    showContainer(container: string) {
      this.activeContainer = container;
    }

    hideImages: boolean = false;


  

}
