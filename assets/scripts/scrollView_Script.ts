import {
  _decorator,
  Component,
  Node,
  ScrollView,
  Prefab,
  instantiate,
  pipeline,
  Label,
  loader,
  JsonAsset,
} from "cc";
const { ccclass, property } = _decorator;

@ccclass("scrollView_Script")
export class scrollView_Script extends Component {
  @property(Prefab)
  myFab: Prefab | null = null;

  @property(JsonAsset)
  jsonFile: JsonAsset | null = null;

  start() {
    console.log("Loading Data....");
    this.loadData();

    // var url = cc.url.raw( '/usersData.json' )
    // loader.loadRes( "/usersData.json", function( err, res)
    // {
    //     console.log( 'load['+ "/path" +'], err['+err+'] result: ' + JSON.stringify( res ) );
    // });

    console.log("json file", this.jsonFile?.json?.data);
  }

  update(deltaTime: number) {}

  loadData() {
    let personData = this.jsonFile?.json?.data;

    personData.forEach((person) => {
      let item = instantiate(this.myFab);

      item.getChildByName("name").getComponent(Label).string = person.name;
      item.getChildByName("rank").getComponent(Label).string = person.rank;
      item.getChildByName("stars").getComponent(Label).string = person.stars;

      this.node.getComponent(ScrollView).content.addChild(item);
    });
  }
}
