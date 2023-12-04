$(function () {
  // 대상을 변수에 저장
  const $selectMenu = $('.select-menu');

  // 셀렉트박스를 클릭하면 --> option의 선택이 바뀌면 (선택박스가 내려오면)
  // change 이벤트 : input, textarea, slelect 등의 요소의 vqlue에 변화가 일어날 때
  $selectMenu.on('change', function () {
    // 클릭한 option의 value값을 가져와서 : val()
    const linkValue = $(this).val();
    console.log(linkValue);

    // 브라우저의 주소창에 적용시킨다. --> 페이지 이동 : location.href
    // 자바스크립트의 내장객체인 location을 사용 중
    // location.href = linkValue;

    // 자바스크립트의 내장객체인 window 사용 중
    // 새 창 열기 ---> window.open()
    window.open(linkValue);
  });
});
