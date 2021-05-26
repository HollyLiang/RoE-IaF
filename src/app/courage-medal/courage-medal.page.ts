import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-courage-medal',
  templateUrl: './courage-medal.page.html',
  styleUrls: ['./courage-medal.page.scss']
})
export class CourageMedalPage {
  form: FormGroup = this.fb.group({});

  skillList = [
    {
      group: 'T9',
      id: 's1',
      name: '騎兵動員',
      maxLevel: 15,
      demand: [
        180, 190, 200, 210, 230,
        250, 280, 330, 400, 480,
        620, 810, 1050, 1470, 2060
      ]
    },
    {
      group: 'T9',
      id: 's2',
      name: '騎兵徵招',
      maxLevel: 15,
      demand: [
        180, 190, 200, 210, 230,
        250, 280, 330, 400, 480,
        620, 810, 1050, 1470, 2060
      ]
    },
    {
      group: 'T9',
      id: 's3',
      name: '狩獵',
      maxLevel: 10,
      demand: [180, 220, 260, 340, 450, 640, 940, 1500, 2550, 4590]
    },
    {
      group: 'T9',
      id: 's4',
      name: '平原戰術',
      maxLevel: 20,
      demand: [
        600, 630, 660, 690, 730,
        800, 880, 970, 1060, 1170,
        1290, 1540, 1850, 2220, 2670,
        3200, 4160, 5410, 7030, 9140
      ]
    },
    {
      group: 'T9',
      id: 's5',
      name: '烏金馬鎧',
      maxLevel: 20,
      demand: [
        600, 630, 660, 690, 730,
        800, 880, 970, 1060, 1170,
        1290, 1540, 1850, 2220, 2670,
        3200, 4160, 5410, 7030, 9140
      ]
    },
    {
      group: 'T9',
      id: 's6',
      name: 'T9解鎖',
      maxLevel: 1,
      demand: [17500]
    }
  ];

  mySkills: Array<any> = [];

  get T9SKills() {
    return this.skillList.filter(s => s.group === 'T9');
  }

  totalDemandMedals = 0;

  constructor(private fb: FormBuilder) {
    this.initForm();
  }

  ngOnInit() { }

  initForm() {
    this.mySkills = this.skillList.map(s => {
      const control = new FormControl(0);
      this.form.addControl(s.id, control);
      const controlWish = new FormControl(0);
      this.form.addControl(s.id + '_w', controlWish);
      return {
        id: s.id,
        level: 0
      };
    });
  }

  onMinusClick(id: string) {
    const nowLevel = +this.form.get(id)?.value;
    const wishLevel = +this.form.get(id + '_w')?.value;
    if (wishLevel > nowLevel) this.form.get(id + '_w')?.setValue(wishLevel - 1);
    this.calTotalMedal();
  }

  onPlusClick(id: string) {
    const wishLevel = +this.form.get(id + '_w')?.value;
    const maxLevel = this.skillList.find(s => s.id === id)?.maxLevel || 0;
    if (wishLevel < maxLevel) this.form.get(id + '_w')?.setValue(wishLevel + 1);
    this.calTotalMedal();
  }

  onSelectionChange(id: string) {
    const nowLevel = +this.form.get(id)?.value;
    const wishLevel = +this.form.get(id + '_w')?.value;
    if (nowLevel > wishLevel) this.form.get(id + '_w')?.setValue(nowLevel);
    this.calTotalMedal();
  }

  calTotalMedal() {
    let totalMedals = 0;
    this.skillList.forEach(sk => {
      const nowLevel = +this.form.get(sk.id)?.value;
      const wishLevel = +this.form.get(sk.id + '_w')?.value;
      for (let i = nowLevel; i < wishLevel; i++) {
        totalMedals += sk.demand[i];
      }
    });
    this.totalDemandMedals = totalMedals;
  }
}
