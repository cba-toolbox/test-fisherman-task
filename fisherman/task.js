/* デモ用のfisherman課題 */
/* 教示 */
var instructions = {
  type: jsPsychHtmlButtonResponse,
  stimulus: "<p style='text-align:left'>湖Aには，赤い魚が８割，黒い魚が２割います。<br>湖Bには，赤い魚が２割，黒い魚が８割います。<br><br>これから釣り人が釣った魚を見せます。<br>魚がどちらの湖から釣れたかスライダーを動かして示してください。<br>なお，釣り人は釣った魚はもとの湖に戻します。</p>",
  choices: ['次へ進む'],
};

/*刺激の設定*/
var stimuli = [
  {stimulus: 'fisherman/stimuli/fish01.png'},
  {stimulus: 'fisherman/stimuli/fish02.png'},
  {stimulus: 'fisherman/stimuli/fish03.png'},
  {stimulus: 'fisherman/stimuli/fish04.png'},
  {stimulus: 'fisherman/stimuli/fish05.png'},
  //{stimulus: 'fisherman/stimuli/fish06.png'},
  //{stimulus: 'fisherman/stimuli/fish07.png'},
  //{stimulus: 'fisherman/stimuli/fish08.png'},
  //{stimulus: 'fisherman/stimuli/fish09.png'},
  //{stimulus: 'fisherman/stimuli/fish10.png'},
];

/*fisherman課題*/
/*ラベルの湖A，Bの向きを，提示される画像と統一しました。*/
var fisherman = {
  timeline: [{
    type: jsPsychImageSliderResponse,
    stimulus: jsPsych.timelineVariable('stimulus'),
    labels: ['湖A', '湖B'],
    prompt: "<p>どちらの湖から釣れたでしょうか？</p>",
    slider_width: '100%',
    stimulus_width: 600,
    min: 0,
    max: 100,
    button_label:"次へ",
  }],
  timeline_variables: stimuli,
};

/*タイムラインの設定*/
var timeline = [instructions, fisherman];