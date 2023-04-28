/* デモ用のfisherman課題 */
/* 教示 */
/*元論文では釣った魚をリリースしていることが教示されていたので，それを追加しました。また，漁師が常に同じ湖で釣りをしているのか否かがわかりにくい課題だと感じました。*/
var instructions = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: "<p style='text-align:left'>魚はどちらの湖から釣れたでしょうか？<br>漁師は釣った魚をもとの湖に戻します。<br>何かキーを押すと課題が始まります。</p>",
  post_trial_gap: 1000,
};

/*刺激の設定*/
var stimuli = [
  {stimulus: 'fisherman/stimuli/fish01.png'},
  {stimulus: 'fisherman/stimuli/fish02.png'},
  {stimulus: 'fisherman/stimuli/fish03.png'},
  {stimulus: 'fisherman/stimuli/fish04.png'},
  {stimulus: 'fisherman/stimuli/fish05.png'},
  {stimulus: 'fisherman/stimuli/fish06.png'},
  {stimulus: 'fisherman/stimuli/fish07.png'},
  {stimulus: 'fisherman/stimuli/fish08.png'},
  {stimulus: 'fisherman/stimuli/fish09.png'},
  {stimulus: 'fisherman/stimuli/fish10.png'},
];

/*fisherman課題*/
/*ラベルの湖A，Bの向きを，提示される画像と統一しました。*/
var fisherman = {
  timeline: [{
    type: jsPsychImageSliderResponse,
    stimulus: jsPsych.timelineVariable('stimulus'),
    labels: ['湖A', '湖B'],
    prompt: "<p>どちらの湖から釣れたでしょうか？</p>",
    stimulus_width:600,
    min: 0,
    max: 100,
    button_label:"次へ",
  }],
  timeline_variables: stimuli,
};

/*タイムラインの設定*/
var timeline = [instructions, fisherman];