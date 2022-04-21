// Done by Carlos Amaral (2021/06/17)

const bycicle = {
    gear: 2,
    setGear(newGear) {
        this.gear = newGear;
    }
};

bycicle.setGear(3);
console.log(bycicle.gear);
