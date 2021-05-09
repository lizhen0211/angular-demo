import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
// import {Chart} from 'chart.js';
import {Chart, registerables} from 'chart.js';
import TimeUtil from '../../util/time-util';

Chart.register(...registerables);

@Component({
  selector: 'app-chartjs-demo',
  templateUrl: './chartjs-demo.component.html',
  styleUrls: ['./chartjs-demo.component.less']
})
export class ChartjsDemoComponent implements OnInit {

  @ViewChild('mychart', {static: true}) mychart: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
    const xData = [1619366999, 1619367599, 1619368199, 1619368799, 1619369399, 1619369999, 1619370599, 1619371199, 1619371799, 1619372399, 1619372999, 1619373599, 1619374199, 1619374799, 1619375399, 1619375999, 1619376599, 1619377199, 1619377799, 1619378399, 1619378999, 1619379599, 1619380199, 1619380799, 1619381399, 1619381999, 1619382599, 1619383199, 1619383799, 1619384399, 1619384999, 1619385599, 1619386199, 1619386799, 1619387399, 1619387999, 1619388599, 1619389199, 1619389799, 1619390399, 1619390999, 1619391599, 1619392199, 1619392799, 1619393399, 1619393999, 1619394599, 1619395199, 1619395799, 1619396399, 1619396999, 1619397599, 1619398199, 1619398799, 1619399399, 1619399999, 1619400599, 1619401199, 1619401799, 1619402399, 1619402999, 1619403599, 1619404199, 1619404799, 1619405399, 1619405999, 1619406599, 1619407199, 1619407799, 1619408399, 1619408999, 1619409599, 1619410199, 1619410799, 1619411399, 1619411999, 1619412599, 1619413199, 1619413799, 1619414399, 1619414999, 1619415599, 1619416199, 1619416799, 1619417399, 1619417999, 1619418599, 1619419199, 1619419799, 1619420399, 1619420999, 1619421599, 1619422199, 1619422799, 1619423399, 1619423999, 1619424599, 1619425199, 1619425799, 1619426399, 1619426999, 1619427599, 1619428199, 1619428799, 1619429399, 1619429999, 1619430599, 1619431199, 1619431799, 1619432399, 1619432999, 1619433599, 1619434199, 1619434799, 1619435399, 1619435999, 1619436599, 1619437199, 1619437799, 1619438399, 1619438999, 1619439599, 1619440199, 1619440799, 1619441399, 1619441999, 1619442599, 1619443199, 1619443799, 1619444399, 1619444999, 1619445599, 1619446199, 1619446799, 1619447399, 1619447999, 1619448599, 1619449199, 1619449799, 1619450399, 1619450999, 1619451599, 1619452199, 1619452799, 1619453399, 1619453999, 1619454599, 1619455199, 1619455799, 1619456399, 1619456999, 1619457599, 1619458199, 1619458799, 1619459399, 1619459999, 1619460599, 1619461199, 1619461799, 1619462399, 1619462999, 1619463599, 1619464199, 1619464799, 1619465399, 1619465999, 1619466599, 1619467199, 1619467799, 1619468399, 1619468999, 1619469599, 1619470199, 1619470799, 1619471399, 1619471999, 1619472599, 1619473199, 1619473799, 1619474399, 1619474999, 1619475599, 1619476199, 1619476799, 1619477399, 1619477999, 1619478599, 1619479199, 1619479799, 1619480399, 1619480999, 1619481599, 1619482199, 1619482799, 1619483399, 1619483999, 1619484599, 1619485199, 1619485799, 1619486399, 1619486999, 1619487599, 1619488199, 1619488799, 1619489399, 1619489999, 1619490599, 1619491199, 1619491799, 1619492399, 1619492999, 1619493599, 1619494199, 1619494799, 1619495399, 1619495999, 1619496599, 1619497199, 1619497799, 1619498399, 1619498999, 1619499599, 1619500199, 1619500799, 1619501399, 1619501999, 1619502599, 1619503199, 1619503799, 1619504399, 1619504999, 1619505599, 1619506199, 1619506799, 1619507399, 1619507999, 1619508599, 1619509199, 1619509799, 1619510399, 1619510999, 1619511599, 1619512199, 1619512799, 1619513399, 1619513999, 1619514599, 1619515199, 1619515799, 1619516399, 1619516999, 1619517599, 1619518199, 1619518799, 1619519399, 1619519999, 1619520599, 1619521199, 1619521799, 1619522399, 1619522999, 1619523599, 1619524199, 1619524799, 1619525399, 1619525999, 1619526599, 1619527199, 1619527799, 1619528399, 1619528999, 1619529599, 1619530199, 1619530799, 1619531399, 1619531999, 1619532599, 1619533199, 1619533799, 1619534399, 1619534999, 1619535599, 1619536199, 1619536799, 1619537399, 1619537999, 1619538599, 1619539199, 1619539799, 1619540399, 1619540999, 1619541599, 1619542199, 1619542799, 1619543399, 1619543999, 1619544599, 1619545199, 1619545799, 1619546399, 1619546999, 1619547599, 1619548199, 1619548799, 1619549399, 1619549999, 1619550599, 1619551199, 1619551799, 1619552399, 1619552999, 1619553599, 1619554199, 1619554799, 1619555399, 1619555999, 1619556599, 1619557199, 1619557799, 1619558399, 1619558999, 1619559599, 1619560199, 1619560799, 1619561399, 1619561999, 1619562599, 1619563199, 1619563799, 1619564399, 1619564999, 1619565599, 1619566199, 1619566799, 1619567399, 1619567999, 1619568599, 1619569199, 1619569799, 1619570399, 1619570999, 1619571599, 1619572199, 1619572799, 1619573399, 1619573999, 1619574599, 1619575199, 1619575799, 1619576399, 1619576999, 1619577599, 1619578199, 1619578799, 1619579399, 1619579999, 1619580599, 1619581199, 1619581799, 1619582399, 1619582999, 1619583599, 1619584199, 1619584799, 1619585399, 1619585999, 1619586599, 1619587199, 1619587799, 1619588399, 1619588999, 1619589599, 1619590199, 1619590799, 1619591399, 1619591999, 1619592599, 1619593199, 1619593799, 1619594399, 1619594999, 1619595599, 1619596199, 1619596799, 1619597399, 1619597999, 1619598599, 1619599199, 1619599799, 1619600399, 1619600999, 1619601599, 1619602199, 1619602799, 1619603399, 1619603999, 1619604599, 1619605199, 1619605799, 1619606399, 1619606999, 1619607599, 1619608199, 1619608799, 1619609399, 1619609999, 1619610599, 1619611199, 1619611799, 1619612399, 1619612999, 1619613599, 1619614199, 1619614799, 1619615399, 1619615999, 1619616599, 1619617199, 1619617799, 1619618399, 1619618999, 1619619599, 1619620199, 1619620799, 1619621399, 1619621999, 1619622599, 1619623199, 1619623799, 1619624399, 1619624999, 1619625599, 1619626199, 1619626799, 1619627399, 1619627999, 1619628599, 1619629199, 1619629799, 1619630399, 1619630999, 1619631599, 1619632199, 1619632799, 1619633399, 1619633999, 1619634599, 1619635199, 1619635799, 1619636399, 1619636999, 1619637599, 1619638199, 1619638799, 1619639399, 1619639999, 1619640599, 1619641199, 1619641799, 1619642399, 1619642999, 1619643599, 1619644199, 1619644799, 1619645399, 1619645999, 1619646599, 1619647199, 1619647799, 1619648399, 1619648999, 1619649599, 1619650199, 1619650799, 1619651399, 1619651999, 1619652599, 1619653199, 1619653799, 1619654399, 1619654999, 1619655599, 1619656199, 1619656799, 1619657399, 1619657999, 1619658599, 1619659199, 1619659799, 1619660399, 1619660999, 1619661599, 1619662199, 1619662799, 1619663399, 1619663999, 1619664599, 1619665199, 1619665799, 1619666399, 1619666999, 1619667599, 1619668199, 1619668799, 1619669399, 1619669999, 1619670599, 1619671199, 1619671799, 1619672399, 1619672999, 1619673599, 1619674199, 1619674799, 1619675399, 1619675999, 1619676599, 1619677199, 1619677799, 1619678399, 1619678999, 1619679599, 1619680199, 1619680799, 1619681399, 1619681999, 1619682599, 1619683199, 1619683799, 1619684399, 1619684999, 1619685599, 1619686199, 1619686799, 1619687399, 1619687999, 1619688599, 1619689199, 1619689799, 1619690399, 1619690999, 1619691599, 1619692199, 1619692799, 1619693399, 1619693999, 1619694599, 1619695199, 1619695799, 1619696399, 1619696999, 1619697599, 1619698199, 1619698799, 1619699399, 1619699999, 1619700599, 1619701199, 1619701799, 1619702399, 1619702999, 1619703599, 1619704199, 1619704799, 1619705399, 1619705999, 1619706599, 1619707199, 1619707799, 1619708399, 1619708999, 1619709599, 1619710199, 1619710799, 1619711399, 1619711999, 1619712599, 1619713199, 1619713799, 1619714399, 1619714999, 1619715599, 1619716199, 1619716799, 1619717399, 1619717999, 1619718599, 1619719199, 1619719799, 1619720399, 1619720999, 1619721599, 1619722199, 1619722799, 1619723399, 1619723999, 1619724599, 1619725199, 1619725799, 1619726399, 1619726999, 1619727599, 1619728199, 1619728799, 1619729399, 1619729999, 1619730599, 1619731199, 1619731799, 1619732399, 1619732999, 1619733599, 1619734199, 1619734799, 1619735399, 1619735999, 1619736599, 1619737199, 1619737799, 1619738399, 1619738999, 1619739599, 1619740199, 1619740799, 1619741399, 1619741999, 1619742599, 1619743199, 1619743799, 1619744399, 1619744999, 1619745599, 1619746199, 1619746799, 1619747399, 1619747999, 1619748599, 1619749199, 1619749799, 1619750399, 1619750999, 1619751599, 1619752199, 1619752799, 1619753399, 1619753999, 1619754599, 1619755199, 1619755799, 1619756399, 1619756999, 1619757599, 1619758199, 1619758799, 1619759399, 1619759999, 1619760599, 1619761199, 1619761799, 1619762399, 1619762999, 1619763599, 1619764199, 1619764799, 1619765399, 1619765999, 1619766599, 1619767199, 1619767799, 1619768399, 1619768999, 1619769599, 1619770199, 1619770799, 1619771399, 1619771999, 1619772599, 1619773199, 1619773799, 1619774399, 1619774999, 1619775599, 1619776199, 1619776799, 1619777399, 1619777999, 1619778599, 1619779199, 1619779799, 1619780399, 1619780999, 1619781599, 1619782199, 1619782799, 1619783399, 1619783999, 1619784599, 1619785199, 1619785799, 1619786399, 1619786999, 1619787599, 1619788199, 1619788799, 1619789399, 1619789999, 1619790599, 1619791199, 1619791799, 1619792399, 1619792999, 1619793599, 1619794199, 1619794799, 1619795399, 1619795999, 1619796599, 1619797199, 1619797799, 1619798399, 1619798999, 1619799599, 1619800199, 1619800799, 1619801399, 1619801999, 1619802599, 1619803199, 1619803799, 1619804399, 1619804999, 1619805599, 1619806199, 1619806799, 1619807399, 1619807999, 1619808599, 1619809199, 1619809799, 1619810399, 1619810999, 1619811599, 1619812199, 1619812799, 1619813399, 1619813999, 1619814599, 1619815199, 1619815799, 1619816399, 1619816999, 1619817599, 1619818199, 1619818799, 1619819399, 1619819999, 1619820599, 1619821199, 1619821799, 1619822399, 1619822999, 1619823599, 1619824199, 1619824799, 1619825399, 1619825999, 1619826599, 1619827199, 1619827799, 1619828399, 1619828999, 1619829599, 1619830199, 1619830799, 1619831399, 1619831999, 1619832599, 1619833199, 1619833799, 1619834399, 1619834999, 1619835599, 1619836199, 1619836799, 1619837399, 1619837999, 1619838599, 1619839199, 1619839799, 1619840399, 1619840999, 1619841599, 1619842199, 1619842799, 1619843399, 1619843999, 1619844599, 1619845199, 1619845799, 1619846399, 1619846999, 1619847599, 1619848199, 1619848799, 1619849399, 1619849999, 1619850599, 1619851199, 1619851799, 1619852399, 1619852999, 1619853599, 1619854199, 1619854799, 1619855399, 1619855999, 1619856599, 1619857199, 1619857799, 1619858399, 1619858999, 1619859599, 1619860199, 1619860799, 1619861399, 1619861999, 1619862599, 1619863199, 1619863799, 1619864399, 1619864999, 1619865599, 1619866199, 1619866799, 1619867399, 1619867999, 1619868599, 1619869199, 1619869799, 1619870399, 1619870999, 1619871599, 1619872199, 1619872799, 1619873399, 1619873999, 1619874599, 1619875199, 1619875799, 1619876399, 1619876999, 1619877599, 1619878199, 1619878799, 1619879399, 1619879999, 1619880599, 1619881199, 1619881799, 1619882399, 1619882999, 1619883599, 1619884199, 1619884799, 1619885399, 1619885999, 1619886599, 1619887199, 1619887799, 1619888399, 1619888999, 1619889599, 1619890199, 1619890799, 1619891399, 1619891999, 1619892599, 1619893199, 1619893799, 1619894399, 1619894999, 1619895599, 1619896199, 1619896799, 1619897399, 1619897999, 1619898599, 1619899199, 1619899799, 1619900399, 1619900999, 1619901599, 1619902199, 1619902799, 1619903399, 1619903999, 1619904599, 1619905199, 1619905799, 1619906399, 1619906999, 1619907599, 1619908199, 1619908799, 1619909399, 1619909999, 1619910599, 1619911199, 1619911799, 1619912399, 1619912999, 1619913599, 1619914199, 1619914799, 1619915399, 1619915999, 1619916599, 1619917199, 1619917799, 1619918399, 1619918999, 1619919599, 1619920199, 1619920799, 1619921399, 1619921999, 1619922599, 1619923199, 1619923799, 1619924399, 1619924999, 1619925599, 1619926199, 1619926799, 1619927399, 1619927999, 1619928599, 1619929199, 1619929799, 1619930399, 1619930999, 1619931599, 1619932199, 1619932799, 1619933399, 1619933999, 1619934599, 1619935199, 1619935799, 1619936399, 1619936999, 1619937599, 1619938199, 1619938799, 1619939399, 1619939999, 1619940599, 1619941199, 1619941799, 1619942399, 1619942999, 1619943599, 1619944199, 1619944799, 1619945399, 1619945999, 1619946599, 1619947199, 1619947799, 1619948399, 1619948999, 1619949599, 1619950199, 1619950799, 1619951399, 1619951999, 1619952599, 1619953199, 1619953799, 1619954399, 1619954999, 1619955599, 1619956199, 1619956799, 1619957399, 1619957999, 1619958599, 1619959199, 1619959799, 1619960399, 1619960999, 1619961599, 1619962199, 1619962799, 1619963399, 1619963999, 1619964599, 1619965199, 1619965799, 1619966399, 1619966999, 1619967599, 1619968199, 1619968799, 1619969399, 1619969999, 1619970599, 1619971199];
    const yData = [null, null, null, 8, 7, 6, 5, 7, 8, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 3.7627, null, null, null, null, null, null, 3.7627, null, null, null, null, null, null, null, null, null, null, null, null, null, 3.8145, null, null, null, null, null, null, null, 3.8145, null, null, null, null, null, null, null, 3.8102, null, null, null, null, null, null, null, null, 3.8059, null, null, null, 3.7929, null, null, 3.7886, null, null, 3.78, null, null, 3.7713, null, null, null, null, null, null, null, 3.7627, null, null, 3.7584, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 3.754, 3.7497, null, null, null, null, null, 3.7454, null, null, null, 3.7497, null, null, null, null, null, null, null, null, 3.7454, null, null, null, null, null, 3.754, null, null, null, null, null, null, null, null, 3.7584, null, null, null, null, null, null, null, null, null, null, 3.7843, null, null, null, null, null, null, null, null, null, null, 3.7929, null, null, null, 3.7756, null, null, 3.767, null, null, 3.7584, null, null, 3.754, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 3.7584, null, null, null, 3.7713, null, null, null, null, null, null, null, 3.7929, null, null, 3.7972, null, null, 3.8059, null, null, 3.8059, null, null, null, null, null, null, null, 3.8232, null, null, null, null, null, null, null, null, null, 3.8145, null, null, null, null, null, null, null, null, 3.8016, null, null, null, null, null, null, 3.7929, null, null, null, 3.7843, null, null, 3.7756, null, null, 3.767, null, null, 3.7584, null, null, 3.754, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 3.767, null, null, null, null, null, null, null, 3.7756, null, 3.78, null, null, null, null, null, null, 3.8016, null, null, null, 3.7972, null, null, 3.7886, null, null, 3.7756, null, null, 3.7627, null, null, 3.7584, null, null, null, 3.7584, null, null, null, null, null, null, null, null, 3.7756, null, null, 3.767, null, null, null, 3.7584, null, null, 3.754, 3.7497, null, null, null, 3.7454, null, null, 3.7454, null, null, 3.7411, null, null, 3.7368, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 3.7454, null, null, null, null, null, null, null, 3.7584, null, null, 3.754, null, null, 3.767, null, null, null, null, 3.78, null, null, null, null, 3.78, null, null, null, null, null, null, null, null, null, null, 3.8059, null, null, null, null, null, null, null, null, null, null, 3.8059, null, null, null, null, null, 3.7972, null, null, 3.7886, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
    console.log(xData.length);
    console.log(yData.length);
    const ctx = this.mychart.nativeElement.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: xData,
        datasets: [{
          label: '# of Votes',
          data: yData,
          // backgroundColor: [
          //   'rgba(255, 99, 132, 0.2)',
          //   'rgba(54, 162, 235, 0.2)',
          //   'rgba(255, 206, 86, 0.2)',
          //   'rgba(75, 192, 192, 0.2)',
          //   'rgba(153, 102, 255, 0.2)',
          //   'rgba(255, 159, 64, 0.2)'
          // ],
          // borderColor: [
          //   'rgba(255, 99, 132, 1)',
          //   'rgba(54, 162, 235, 1)',
          //   'rgba(255, 206, 86, 1)',
          //   'rgba(75, 192, 192, 1)',
          //   'rgba(153, 102, 255, 1)',
          //   'rgba(255, 159, 64, 1)'
          // ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          },
          x: {
            grid: {
              display: true,
              drawBorder: true,
              drawOnChartArea: true,
              drawTicks: true,
            },
            ticks: {
              // For a category axis, the val is the index so the lookup via getLabelForValue is needed
              callback: function(val, index) {
                // Hide the label of every 2nd dataset
                // console.log(index);
                const labelForValue = this.getLabelForValue(val);
                // console.log(labelForValue);
                if (index % 144 === 0) {
                  console.log('index:' + index);
                }
                return index % 144 === 0 ? TimeUtil.getDateYYYYMMDD(Number(labelForValue * 1000)) : '';
              },
              color: 'red',
            }
          }
        }
      }
    });
  }

}