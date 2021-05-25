import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  missions = [
    [
      { includes: ['建築', '建築加速'] },
      { includes: ['建築'] },
      { includes: ['士兵加速'] },
      { includes: ['建築', '訓練士兵'] },
      { includes: ['建築加速', '科技加速', '訓練加速'] },
      { includes: ['建築', '科技', '士兵加速'] },
      { includes: ['建築', '科技', '訓練士兵'] },
      { includes: ['建築'] }
    ],
    [
      { includes: ['建築'] },
      { includes: ['建築', '科技', '士兵加速'] },
      { includes: ['建築', '裝備'] },
      { includes: ['任意加速'], recommend: true },
      { includes: ['建築', '科技'] },
      { includes: ['建築', '建築加速'], recommend: true },
      { includes: ['建築', '科技'] },
      { includes: ['建築', '科技', '訓練士兵'] }
    ],
    [
      { includes: ['任意加速'], recommend: true },
      { includes: ['科技', '科技加速'], recommend: true },
      { includes: ['建築加速', '科技加速', '訓練加速'], recommend: true },
      { includes: ['建築', '科技'] },
      { includes: ['建築', '科技'] },
      { includes: ['建築加速', '科技加速', '訓練加速'], recommend: true },
      { includes: ['建築', '科技', '士兵加速'] },
      { includes: ['建築', '科技'] }
    ],
    [
      { includes: ['招募', '解鎖技能'] },
      {
        includes: ['招募', '解鎖技能', '經驗', '消耗智慧勳章'],
        recommend: true
      },
      { includes: ['解鎖技能', '消耗智慧勳章'] },
      {
        includes: ['招募', '解鎖技能', '經驗', '消耗智慧勳章'],
        recommend: true
      },
      { includes: ['招募', '消耗智慧勳章'] },
      {
        includes: ['招募', '解鎖技能', '經驗', '消耗智慧勳章'],
        recommend: true
      },
      { includes: ['解鎖技能', '兌換智慧勳章', '消耗智慧勳章'] },
      {
        includes: ['招募', '解鎖技能', '經驗', '消耗智慧勳章'],
        recommend: true
      }
    ],
    [
      { includes: ['任意加速'], recommend: true },
      { includes: ['建築加速', '科技加速', '士兵加速'], recommend: true },
      { includes: ['建築', '科技', '士兵加速'], recommend: true },
      { includes: ['士兵加速'], recommend: true },
      { includes: ['建築', '科技', '士兵加速'], recommend: true },
      { includes: ['建築', '訓練士兵'] },
      { includes: ['科技', '訓練士兵'] },
      { includes: ['任意加速'], recommend: true }
    ],
    [
      { includes: ['任意加速'] },
      { includes: ['科技', '科技加速'] },
      { includes: ['建築', '建築加速'] },
      { includes: ['士兵加速'] },
      { includes: ['建築', '科技', '士兵加速'] },
      { includes: ['建築', '科技', '士兵加速'] },
      { includes: ['建築', '訓練士兵'] },
      { includes: ['科技', '訓練士兵'] }
    ],
    [
      { includes: ['任意加速'] },
      { includes: ['科技', '科技加速'] },
      { includes: ['建築', '建築加速'] },
      { includes: ['士兵加速'] },
      { includes: ['建築', '科技', '士兵加速'] },
      { includes: ['建築', '科技', '士兵加速'] },
      { includes: ['建築', '訓練士兵'] },
      { includes: ['科技', '訓練士兵'] }
    ]
  ];

  timer: number;
  nowTime = new Date();
  mission: any;
  nextMission: any;

  constructor() {}

  ngOnInit() {
    this.setTimer();
  }

  setTimer() {
    this.timer = setTimeout(() => {
      this.nowTime = new Date();

      let calTime = new Date();
      calTime.setHours(calTime.getHours() - 10);
      this.mission = this.missions[calTime.getDay() - 1][
        calTime.getHours() % 8
      ];

      calTime = new Date();
      calTime.setHours(calTime.getHours() - 9);
      this.nextMission = this.missions[calTime.getDay() - 1][
        calTime.getHours() % 8
      ];

      console.log(calTime);
      this.setTimer();
    }, 1000);
  }

  ngOnDestroy() {
    clearTimeout(this.timer);
  }
}
