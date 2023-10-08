package cha.friendly.controller;

import cha.friendly.domain.Advicerequest;
import cha.friendly.domain.Member;
import cha.friendly.repository.AdviceRequestCRUDRepository;
import cha.friendly.service.MemberService;
import cha.friendly.session.SessionConst;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@Slf4j
@RequiredArgsConstructor
@Transactional
public class AdviceRequest {

    private final MemberService memberService;
    @Autowired
    AdviceRequestCRUDRepository adviceRequestCRUDRepository;
    @Autowired
    MemberCRUDRepository memberCRUDRepository;

    @GetMapping("/adviceRequestPage1")
    public String adviceRequestPage1(@SessionAttribute(name = SessionConst.LOGIN_MEMBER, required = false) Member loginMember, Model model) {
        //세션에 회원 데이터가 없으면 home
        if (loginMember == null) {
            return "home";
        }
        model.addAttribute("member", loginMember);
        return "/ryu/adviceRequestPage1";
    }

    @PostMapping(value = "/adviceRequest1")
    public String adviceRequest1(@ModelAttribute RequestDto dto, Model model){
        //신청서에 값 세팅
        Advicerequest advicerequest = Advicerequest.create(dto);
        model.addAttribute("id", advicerequest.getRequest_id());
        return "/ryu/adviceRequestPage2";
    }

    @PostMapping ("/adviceRequest2")
    public String adviceRequest2(@RequestParam(value = "one")String one, @RequestParam(value = "two")String two,
                                 @RequestParam(value = "three")String three, @RequestParam(value = "id")Long request_id){
        Advicerequest adviceRequest = adviceRequestCRUDRepository.findByRequest(request_id);
        adviceRequest.setOne(one);
        adviceRequest.setTwo(two);
        adviceRequest.setThree(three);
        adviceRequest.setMatching("매칭 전");
        adviceRequestCRUDRepository.save(adviceRequest); //신청서 저장완료
        //매칭 시도
        if (one.equals("가격") && two.equals("시간")){
            //adviceUsers는 조건에 부합하는 멘토(또는 상담사)목록이다.
            List<Member> adviceUsers = memberCRUDRepository.findByUserListOneIsPrice1(adviceRequest.getOne(), adviceRequest.getCategory(), adviceRequest.getAdvice_time(), adviceRequest.getProfessional());
//            adviceUsers.
        }
//            else{
//                List<Member> adviceUsers = memberCRUDRepository.findByUserListOneIsPrice2(reqData.getPrice(), reqData.getCategory(), reqData.getProfessional(), reqData.getAdvice_time());
//
//            }

        return "redirect:/";
    }

    //매칭 안된사람들 출력(관리자용)
    @GetMapping ("/AdviceRequestList1")public String AdviceRequestLsit1(Model model){
        List<Advicerequest> advicerequest = adviceRequestCRUDRepository.findByAdviceRequestList(); //매칭 안된 사람들
        model.addAttribute("requestList", advicerequest);
        return "/ryu/adviceRequestList";
    }

    @PostMapping("/nextAdviceRequestPage") public  String nextAdviceRequestPage(Model model, Long id) {
        System.out.println(id);
        model.addAttribute("id", id);
        return "/ryu/adviceRequestPage2";}
}

