package cha.friendly.domain.Dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class MemoIdsRequest {
    private List<Long> memoIds;
}
