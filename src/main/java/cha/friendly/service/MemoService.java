package cha.friendly.service;

import cha.friendly.domain.Memo;
import cha.friendly.repository.MemoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
public class MemoService {
    private final MemoRepository memoRepository;


    public Memo addMemo(Memo memo) {
        return memoRepository.save(memo);
    }

    public void deleteSelectedMemo(List<Long> memoIds) {
        for (Long memoId : memoIds) {
            memoRepository.deleteById(memoId);
        }
    }

    public List<Memo> getAllMemos(Long memberId) {
        return memoRepository.findAllByMemberId(memberId);
    }
}
