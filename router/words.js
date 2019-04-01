const express = require('express');
const router = express.Router();

router.get('/:date', function(req, res) {
  // date에 생성된 단어 목록을 응답한다.
  res.send('get word date : ' + req.params.date);
});

router.post('/', function(req, res) {
  // 선택된 단어의 complete상태를 true로 저장하고 단어의 id를 응답한다.
  res.send('post words');
});

router.get('/:wordbook_id', function(req, res) {
  // 단어장에서 선택한 단어의 뜻과 예문을 응답한다.
  res.send('get words wordbook id : ' + req.params.wordbook_id);
});

module.exports = router;
