package cha.friendly.controller;

import cha.friendly.domain.Advicerequest;
import cha.friendly.domain.Dto.RequestDto;
import cha.friendly.domain.Member;
import cha.friendly.repository.AdviceRequestCRUDRepository;
import cha.friendly.repository.MemberCRUDRepository;
import cha.friendly.service.MemberService;
import cha.friendly.session.SessionConst;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import retrofit2.http.Path;

import javax.servlet.http.HttpSession;
import java.util.List;

@RequiredArgsConstructor
@Slf4j
@RestController
public class RequestFromController {
    private final MemberCRUDRepository memberCRUDRepository;
    private final MemberService memberService;
    private final AdviceRequestCRUDRepository adviceRequestCRUDRepository;

    @PostMapping("/adviceRequest")
    public String adviceRequest(@RequestBody RequestDto requestDto,
                                 @SessionAttribute(name = SessionConst.LOGIN_MEMBER, required = false) Member loginMember) {
        int expStat = 0;
        if (requestDto.getExpStat().equals("희망")){
            expStat = 1;
        }
        Advicerequest adviceRequest = Advicerequest.create(requestDto, loginMember, expStat);
        log.info(adviceRequest.getUser_name());
        adviceRequestCRUDRepository.save(adviceRequest);
        return "moveAdviceRequest";
    }
    @GetMapping("/manage/match/list")
    public List<Advicerequest> reqList() {
        List<Advicerequest> byAdviceRequestList = adviceRequestCRUDRepository.findByAdviceRequestList();
        if(byAdviceRequestList.size()==0)
            return null;
        return byAdviceRequestList;
    }
    @GetMapping("/manage/match/list/{request_id}")
    public Advicerequest reqSelectedOne(@PathVariable Long request_id) {
        Advicerequest advicerequest = adviceRequestCRUDRepository.findByRequest_id(request_id);
        if(advicerequest==null)
            return null;
        return advicerequest;
    }

    @GetMapping(value = "/moveAdviceRequest")
    public String adviceRequest1(HttpSession session, Model model){
        Long member_id  = Long.valueOf(String.valueOf(session.getAttribute("data")));
        Member member = memberCRUDRepository.findByMember(member_id);
        model.addAttribute("loginData", member);
        return "/loginResult";
    }


    @GetMapping (value = "/AdviceRequestLsit1")public String AdviceRequestLsit1(Model model){
        List<Advicerequest> advicerequest = adviceRequestCRUDRepository.findByAdviceRequestList();
        model.addAttribute("requestList", advicerequest);
        return "/adviceRequestList";
    }

}

