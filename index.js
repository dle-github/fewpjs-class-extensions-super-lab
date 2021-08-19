// Write your classes here
class Tree{
    constructor(sp){
        this.species = sp;
    }

    static definition(){
        return "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves."
    }
}

class Deciduous extends Tree{
    constructor(sp, nm){
        super(sp)
        this.name = nm
    }

    static definition(){
        return super.definition() + " Deciduous trees shed their leaves annually."
    }
}

class Evergreen  extends Tree{
    constructor(sp, nm){
        super(sp)
        this.name = nm
    }

    static definition(){
        return super.definition() + " Evergreens keep their leaves all year round."
    }
}