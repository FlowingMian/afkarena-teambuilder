import { ArtifactGuide } from '../../model/artifacts';
import * as Lightbearers from '../heroes/lightbearers';
import * as Maulers from '../heroes/maulers';
import * as Wilders from '../heroes/wilders';
import * as Graveborns from '../heroes/graveborns';
import * as Celestials from '../heroes/celestials';
import * as Hypogeans from '../heroes/hypogeans';
import * as Dimensionals from '../heroes/dimensionals';
import { 
  Grace,
  Eye,
  Call,
  Drape,
  Blade,
  Chalice,
  Conviction,
  Barricade,
  Waistband,
  Chaos,
  Carnage,
  Shroud,
  Longbow,
  Windbinder,
  Warden,
  Tidebearer,
  Seraphic,
} from '../../model/characteristics/artifacts';

const artifactGuide: ArtifactGuide = {
  id: 'SILENTBOBUS',
  name: 'Crowdsourced Artifact Guide',
  author: 'SilentBobUS',
  updateDate: 'Apr 2021',
  links: [{
    label: 'Crowdsourced Artifact Guide',
    url: 'https://www.reddit.com/r/afkarena/comments/kw5hko/crowdsourced_artifact_guide_new_class_specific/',
  }], 
  artifacts : new Map([
    [Dimensionals.Ainz,         {rank1: [Windbinder],   rank2: [Eye],           rank3: [Call]}],
    [Dimensionals.Albedo,       {rank1: [Waistband],    rank2: [Chalice],       rank3: [Barricade]}],
    [Celestials.Alna,           {rank1: [Chaos],        rank2: [Eye],           rank3: [Call]}],
    [Maulers.Anoki,             {rank1: [Waistband],    rank2: [Chalice],       rank3: [Barricade]}],
    [Maulers.Antandra,          {rank1: [Chaos],        rank2: [Carnage],       rank3: [Grace]}],
    [Dimensionals.Arthur,       {rank1: [Barricade],    rank2: [Chalice],       rank3: [Waistband]}],
    [Celestials.Athalia,        {rank1: [Eye],          rank2: [Longbow],       rank3: [Shroud]}],
    [Graveborns.Baden,          {rank1: [Chaos],        rank2: [Eye],           rank3: [Carnage]}],
    [Lightbearers.Belinda,      {rank1: [Windbinder],   rank2: [Eye],           rank3: [Warden]}],
    [Maulers.Brutus,            {rank1: [Barricade],    rank2: [Blade],         rank3: [Waistband]}],
    [Lightbearers.Cecilia,      {rank1: [Shroud],       rank2: [Eye],           rank3: [Longbow]}],
    [Graveborns.Daimon,         {rank1: [Call],         rank2: [Waistband],     rank3: [Drape]}],
    [Maulers.Drez,              {rank1: [Eye],          rank2: [Blade],         rank3: [Shroud]}],
    [Wilders.Eironn,            {rank1: [Shroud],       rank2: [Call],          rank3: [Eye]}],
    [Celestials.ElijahLailah,   {rank1: [Call],         rank2: [Tidebearer],    rank3: [Eye]}],
    [Lightbearers.Eluard,       {rank1: [Call],         rank2: [Windbinder],    rank3: [Eye]}],
    [Lightbearers.Estrilda,     {rank1: [Chaos],        rank2: [Carnage],       rank3: [Chalice]}],
    [Dimensionals.Ezio,         {rank1: [Call],         rank2: [Grace],         rank3: [Shroud]}],
    [Hypogeans.Ezizh,           {rank1: [Tidebearer],   rank2: [Seraphic],      rank3: [Call]}],
    [Lightbearers.Fawkes,       {rank1: [Eye],          rank2: [Blade],         rank3: [Longbow]}],
    [Graveborns.Ferael,         {rank1: [Eye],          rank2: [Blade],         rank3: [Shroud]}],
    [Celestials.Flora,          {rank1: [Eye],          rank2: [Windbinder],    rank3: [Conviction]}],
    [Wilders.Gorvo,             {rank1: [Waistband],    rank2: [Grace],         rank3: [Chalice]}],
    [Graveborns.Grezhul,        {rank1: [Chalice],      rank2: [Eye],           rank3: [Blade]}],
    [Lightbearers.Gwyneth,      {rank1: [Eye],          rank2: [Shroud],        rank3: [Blade]}],
    [Lightbearers.Hendrik,      {rank1: [Waistband],    rank2: [Barricade],     rank3: [Chalice]}],
    [Graveborns.Isabella,       {rank1: [Eye],          rank2: [Windbinder],    rank3: [Warden]}],
    [Graveborns.Izold,          {rank1: [Chaos],        rank2: [Carnage],       rank3: [Drape]}],
    [Dimensionals.JOKER,        {rank1: [Shroud],       rank2: [Eye],           rank3: [Longbow]}],
    [Wilders.Kaz,               {rank1: [Grace],        rank2: [Shroud],        rank3: [Eye]}],
    [Graveborns.Kelthur,        {rank1: [Shroud],       rank2: [Eye],           rank3: [Longbow]}],
    [Maulers.Khasos,            {rank1: [Chaos],        rank2: [Eye],           rank3: [Blade]}],
    [Hypogeans.Khazard,         {rank1: [Windbinder],   rank2: [Eye],           rank3: [Call]}],
    [Maulers.Kren,              {rank1: [Eye],          rank2: [Call],          rank3: [Shroud]}],
    [Wilders.Lorsan,            {rank1: [Windbinder],   rank2: [Warden],        rank3: [Eye]}],
    [Lightbearers.Lucius,       {rank1: [Waistband],    rank2: [Barricade],     rank3: [Chalice]}],
    [Hypogeans.Lucretia,        {rank1: [Eye],          rank2: [Blade],         rank3: [Shroud]}],
    [Wilders.Lyca,              {rank1: [Longbow],      rank2: [Shroud],        rank3: [Eye]}],
    [Hypogeans.Mehira,          {rank1: [Windbinder],   rank2: [Warden],        rank3: [Drape]}],
    [Hypogeans.Mezoth,          {rank1: [Waistband],    rank2: [Barricade],     rank3: [Chalice]}],
    [Hypogeans.Mortas,          {rank1: [Tidebearer],   rank2: [Eye],           rank3: [Seraphic]}],
    [Dimensionals.Nakoruru,     {rank1: [Eye],          rank2: [Grace],         rank3: [Shroud]}],
    [Graveborns.Nara,           {rank1: [Chaos],        rank2: [Eye],           rank3: [Carnage]}],
    [Wilders.Nemora,            {rank1: [Tidebearer],   rank2: [Call],          rank3: [Seraphic]}],
    [Maulers.Numisu,            {rank1: [Call],         rank2: [Tidebearer],    rank3: [Seraphic]}],
    [Graveborns.Oden,           {rank1: [Windbinder],   rank2: [Eye],           rank3: [Warden]}],
    [Celestials.Orthos,         {rank1: [Waistband],    rank2: [Chalice],       rank3: [Drape]}],
    [Lightbearers.Oscar,        {rank1: [Eye],          rank2: [Shroud],        rank3: [Longbow]}],
    [Lightbearers.Peggy,        {rank1: [Call],         rank2: [Tidebearer],    rank3: [Eye]}],
    [Wilders.Pippa,             {rank1: [Warden],       rank2: [Call],          rank3: [Windbinder]}],
    [Dimensionals.QUEEN,        {rank1: [Eye],          rank2: [Chaos],         rank3: [Carnage]}],
    [Lightbearers.Raine,        {rank1: [Call],         rank2: [Tidebearer],    rank3: [Seraphic]}],
    [Wilders.Raku,              {rank1: [Longbow],      rank2: [Shroud],        rank3: [Eye]}],
    [Wilders.Respen,            {rank1: [Eye],          rank2: [Call],          rank3: [Shroud]}],
    [Lightbearers.Rigby,        {rank1: [Chalice],      rank2: [Grace],         rank3: [Carnage]}],
    [Lightbearers.Rosaline,     {rank1: [Eye],          rank2: [Call],          rank3: [Tidebearer]}],
    [Lightbearers.Rowan,        {rank1: [Call],         rank2: [Tidebearer],    rank3: [Seraphic]}],
    [Maulers.Safiya,            {rank1: [Windbinder],   rank2: [Eye],           rank3: [Call]}],
    [Maulers.Satrana,           {rank1: [Windbinder],   rank2: [Eye],           rank3: [Warden]}],
    [Wilders.Saurus,            {rank1: [Chaos],        rank2: [Blade],         rank3: [Eye]}],
    [Wilders.Seirus,            {rank1: [Chalice],      rank2: [Call],          rank3: [Carnage]}],
    [Graveborns.Shemira,        {rank1: [Windbinder],   rank2: [Eye],           rank3: [Warden]}],
    [Graveborns.Silas,          {rank1: [Call],         rank2: [Blade],         rank3: [Drape]}],
    [Maulers.Skreg,             {rank1: [Waistband],    rank2: [Chalice],       rank3: [Call]}],
    [Maulers.Skriath,           {rank1: [Warden],       rank2: [Windbinder],    rank3: [Eye]}],
    [Wilders.Solise,            {rank1: [Windbinder],   rank2: [Eye],           rank3: [Warden]}],
    [Celestials.Talene,         {rank1: [Blade],        rank2: [Call],          rank3: [Eye]}],
    [Wilders.Tasi,              {rank1: [Call],         rank2: [Eye],           rank3: [Tidebearer]}],
    [Lightbearers.Thane,        {rank1: [Eye],          rank2: [Grace],         rank3: [Shroud]}],
    [Graveborns.Theowyn,        {rank1: [Eye],          rank2: [Call],          rank3: [Shroud]}],
    [Graveborns.Thoran,         {rank1: [Call],         rank2: [Waistband],     rank3: [Chalice]}],
    [Maulers.Tidus,             {rank1: [Shroud],       rank2: [Grace],         rank3: [Eye]}],
    [Graveborns.Torne,          {rank1: [Waistband],    rank2: [Chalice],       rank3: [Blade]}],
    [Dimensionals.Ukyo,         {rank1: [Chaos],        rank2: [Eye],           rank3: [Carnage]}],
    [Wilders.Ulmus,             {rank1: [Waistband],    rank2: [Drape],         rank3: [Chalice]}],
    [Maulers.Vurk,              {rank1: [Eye],          rank2: [Blade],         rank3: [Longbow]}],
    [Maulers.Warek,             {rank1: [Chaos],        rank2: [Eye],           rank3: [Carnage]}],
    [Celestials.Wukong,         {rank1: [Chaos],        rank2: [Eye],           rank3: [Carnage]}],
    [Celestials.Zaphrael,       {rank1: [Windbinder],   rank2: [Eye],           rank3: [Call]}],
    [Hypogeans.Zolrath,         {rank1: [Chaos],        rank2: [Eye],           rank3: [Carnage]}],
  ]),
};
export default artifactGuide;