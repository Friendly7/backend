package cha.friendly.controller;

import cha.friendly.domain.Dto.MemoIdsRequest;
import cha.friendly.domain.Member;
import cha.friendly.domain.Memo;
import cha.friendly.service.MemoService;
import cha.friendly.session.SessionConst;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/api/memos")
public class MemoController {
    private final MemoService memoService;

    @PostMapping
    public ResponseEntity<Memo> addMemo(@RequestParam(value = "memo") String contents,
                                        @SessionAttribute(name = SessionConst.LOGIN_MEMBER, required = false) Member loginMember) {
        Memo memo = new Memo();
        String contentsWithBr = contents.replace("\n", "<br>");
        memo.setContents(contentsWithBr);
        memo.setMemberId(loginMember.getId());
        Memo addMemo = memoService.addMemo(memo);
        return ResponseEntity.ok(addMemo);
    }

    @DeleteMapping
    public ResponseEntity<String> deleteMemos(@RequestBody MemoIdsRequest memoIdsRequest) {
        // memoIdsRequest 안에 선택된 메모 ID 목록이 들어 있음
        List<Long> memoIds = memoIdsRequest.getMemoIds();
        memoService.deleteSelectedMemo(memoIds);
        return ResponseEntity.ok("Memos deleted successfully");
    }

    @GetMapping
    public ResponseEntity<List<Memo>> getMemos(@SessionAttribute(name = SessionConst.LOGIN_MEMBER, required = false) Member loginMember) {
        try {
            List<Memo> memos = memoService.getAllMemos(loginMember.getId());
            return ResponseEntity.ok(memos);
        } catch (Exception e) {
//            throw new RuntimeException(e);
            return null;
        }
    }
}