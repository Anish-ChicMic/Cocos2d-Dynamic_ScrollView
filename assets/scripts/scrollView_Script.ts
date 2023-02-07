import { _decorator, Component, Node, ScrollView, Prefab, instantiate, Label } from "cc";
const { ccclass, property } = _decorator;

@ccclass("scrollView_Script")
export class scrollView_Script extends Component {

    @property(Prefab)
    myFab: Prefab | null = null;

    data = [
        {
            "name": "Anish Kumar",
            "rank": "1",
            "stars": "⭐️⭐️⭐️⭐️"
        },
        {
            "name": "Rahul Gupta",
            "rank": "1",
            "stars": "⭐️⭐️⭐️"
        },
        {
            "name": "Anish Kumar",
            "rank": "2",
            "stars": "⭐️⭐️⭐️"
        },
        {
            "name": "Anish Kumar",
            "rank": "3",
            "stars": "⭐️⭐️"
        },
        {
            "name": "Manish Kumar",
            "rank": "4",
            "stars": "⭐️⭐️⭐️"
        },
        {
            "name": "Manipuri",
            "rank": "5",
            "stars": "⭐️⭐️"
        },
        {
            "name": "Anish Kumar",
            "rank": "6",
            "stars": "⭐️"
        },
        {
            "name": "Anish Kumar",
            "rank": "7",
            "stars": "⭐️⭐️⭐️"
        },
        {
            "name": "Anish Kumar",
            "rank": "9",
            "stars": "⭐️⭐️⭐️⭐️"
        },
        {
            "name": "Anish Kumar",
            "rank": "10",
            "stars": "⭐️⭐️⭐️⭐️"
        },
        {
            "name": "Anish Kumar",
            "rank": "12",
            "stars": "⭐️⭐️⭐️⭐️"
        },
        {
            "name": "Anish Kumar",
            "rank": "13",
            "stars": "⭐️⭐️⭐️⭐️"
        },
        {
            "name": "Sohan Kumar",
            "rank": "14",
            "stars": "⭐️⭐️⭐️⭐️"
        }
    ];

    start() { 
        console.log("Loading Data....");
        this.loadData();
    }

    update(deltaTime: number) { }

    loadData(){
        this.data.forEach(person => {

            let item = instantiate(this.myFab);

            item.getChildByName('name').getComponent(Label).string = person.name;
            item.getChildByName('rank').getComponent(Label).string = person.rank;
            item.getChildByName('stars').getComponent(Label).string = person.stars;
            
            this.node.getComponent(ScrollView).content.addChild(item);

        });
    }
}
