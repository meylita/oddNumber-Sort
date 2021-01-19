import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public sumOddNumber;
  public sumUniqOddNumber;
  public sortNumber;

  public numbers = [1, 4, 5, 1, 2, 10, 12, 15, 11, 13, 11, 5];
  public numberSort = [1, 3, 4, 3, 2, 3, 0, 10, 30, 30, 7];

  constructor() {
    /**4a. Sum Odd Number */
    const oddNumber = this.numbers.filter(item => item % 2 != 0);
    this.sumOddNumber = oddNumber.reduce((a, b) => a + b, 0);

    /**4b. Sum Unique Odd Number */
    const uniqOddNumber = oddNumber.filter(
      (n, i) => oddNumber.indexOf(n) === i
    );
    this.sumUniqOddNumber = uniqOddNumber.reduce((a, b) => a + b, 0);

    /**5. Sort Number Number */
    this.sortNumber = this.numberSort.sort((a, b) => a - b);
  }
}