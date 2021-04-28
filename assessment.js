'use strcit';
const userNameInput=document.getElementById('user-name');
const assessmentButton=document.getElementById('assessment');
const resultDivided=document.getElementById('result-area');
const tweetDivided=document.getElementById('tweet-area');
userNameInput.onkeydown = event => {
  if (event.key === 'Enter') {
    assessmentButton.onclick();
  }
};
function removeAllChildren(element){
  while(element.firstChild){
    element.removeChild(element.firstChild);
  }
}
assessmentButton.onclick=()=>{
const username=userNameInput.value;
if(username.length==0){
  return;
}
removeAllChildren(resultDivided);
const h3=document.createElement('h3');
h3.innerText='診断結果';
resultDivided.appendChild(h3);

const p=document.createElement('p');
const result=assessment(username);
p.innerText=result;
resultDivided.appendChild(p);

removeAllChildren(tweetDivided);
const a=document.createElement('a');
const href=
'https://twitter.com/intent/tweet?button_hashtag='+
encodeURIComponent('あなたのいいところ')+
'&ref_src=twsrc%5Etfw';

a.setAttribute('href',href);
a.className='twitter-hashtag-button';
a.setAttribute('data-text',result);
a.innerText='tweet#あなたの良いところ';
tweetDivided.appendChild(a);

const script=document.createElement('script');
script.setAttribute('src',"https://platform.twitter.com/widgets.js" );
tweetDivided.appendChild(script);
};
  //診断結果を新しく表示するエリア
const answers=[
'{userName}のいいところは声です。{userName}の特徴的な声は皆を惹きつけ、心に残ります。',
  '{userName}のいいところはまなざしです。{userName}に見つめられた人は、気になって仕方がないでしょう。',
  '{userName}のいいところは情熱です。{userName}の情熱に周りの人は感化されます。',
  '{userName}のいいところは厳しさです。{userName}の厳しさがものごとをいつも成功に導きます。',
  '{userName}のいいところは知識です。博識な{userName}を多くの人が頼りにしています。',
  '{userName}のいいところはユニークさです。{userName}だけのその特徴が皆を楽しくさせます。',
  '{userName}のいいところは用心深さです。{userName}の洞察に、多くの人が助けられます。',
  '{userName}のいいところは見た目です。内側から溢れ出る{userName}の良さに皆が気を惹かれます。',
  '{userName}のいいところは決断力です。{userName}がする決断にいつも助けられる人がいます。',
  '{userName}のいいところは思いやりです。{userName}に気をかけてもらった多くの人が感謝しています。',
  '{userName}のいいところは感受性です。{userName}が感じたことに皆が共感し、わかりあうことができます。',
  '{userName}のいいところは節度です。強引すぎない{userName}の考えに皆が感謝しています。',
  '{userName}のいいところは好奇心です。新しいことに向かっていく{userName}の心構えが多くの人に魅力的に映ります。',
  '{userName}のいいところは気配りです。{userName}の配慮が多くの人を救っています。',
  '{userName}のいいところはその全てです。ありのままの{userName}自身がいいところなのです。',
  '{userName}のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる{userName}が皆から評価されています。',
  '{userName}のいいところは優しさです。あなたの優しい雰囲気や立ち振る舞いに多くの人が癒やされています。',
  '{userName}の良いところは、決断力です。あなたの決定に誰もが従います。',
  
];
/**
 * 名前の文字列を渡すと診断結果を返す関数
 * @param{string}userName
 * @return{string}診断結果
 */
function assessment(userName){
  let number=0;
  for(let i=0;i<userName.length;i++){
    number+=userName.charCodeAt(i);
  }
  let index=number%answers.length;
  return answers[index].replace(/\{userName\}/g,userName);
}
