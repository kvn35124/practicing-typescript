class Die {

    public value: number;
    public div: any;


    constructor() {
        this.div = $('<div class="box"></div>');
        this.roll();
        this.div.text(this.value);
        $('#container').append(this.div);
        this.div.click(() => this.reRoll());
        this.div.dblclick(() => this.removeDie());
    }
    roll() {
        this.value = Math.floor(Math.random() * 6 + 1);
    }
    reRoll() {
        this.roll();
        this.div.text(this.value);
    }
    removeDie() {
        let index = dice.indexOf(this);
        dice.splice(index);
        this.div.remove();
    }
}

let dice = [];

$('#die').click(function() {
    console.log('Test')
    let die = new Die();
    dice.push(die);
})

$('#roll').click(function() {
    for(let i = 0; i < dice.length; i++){
        dice[i].reRoll();
    }
})

$('#sum').click(function() {
    let sum = 0;
    for(let i = 0; i < dice.length; i++) {
        sum = (dice[i].value + sum);
    }
    alert(sum);
})