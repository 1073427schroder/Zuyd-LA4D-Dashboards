export class LearningActivity {

  constructor(
    public id: number,
    public title: string,
    public type: string,
    public description: string,
    public intention: string,
    public timeEstimated: number,
    public week: number
  ) { }

}
