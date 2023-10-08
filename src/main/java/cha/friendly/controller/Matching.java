package cha.friendly.controller;

import cha.friendly.domain.Advicerequest;
import cha.friendly.domain.Member;
import cha.friendly.repository.AdviceRequestCRUDRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Slf4j
@Controller
@RequiredArgsConstructor
@Transactional
public class Matching {
    @Autowired
    AdviceRequestCRUDRepository adviceRequestCRUDRepository;

    @Autowired
    MemberCRUDRepository memberCRUDRepository;


    @PostMapping(value = "/matchinglist")public String matchinglist(@RequestParam(value = "request")Long id,@RequestParam(value = "one")String one, @RequestParam(value = "two")String two, @RequestParam(value = "three")String three, Model model){
        Advicerequest reqData = adviceRequestCRUDRepository.findByRequest(id); //신청서 정보 담은 객체

        if (one.equals("시간")){
            if (two.equals("가격")){
                List<Member> adviceUsers = memberCRUDRepository.findByUserListOneIsTime1(reqData.getAdvice_time(), reqData.getCategory(), reqData.getMaxPrice(), reqData.getProfessional());
                model.addAttribute("list", adviceUsers);
                model.addAttribute("id", id);
                return "/ryu/adviceRequestMentorList";
            }
            else{
                List<Member> adviceUsers = memberCRUDRepository.findByUserListOneIsTime2(reqData.getAdvice_time(), reqData.getCategory(), reqData.getProfessional(), reqData.getMaxPrice());
                model.addAttribute("list", adviceUsers);
                model.addAttribute("id", id);
                return "/ryu/adviceRequestMentorList";
            }
        }
        if (one.equals("전문")){
            if (two.equals("시간")){
                List<Member> adviceUsers = memberCRUDRepository.findByUserListOneIsPro1(reqData.getProfessional(), reqData.getCategory(), reqData.getAdvice_time(), reqData.getMaxPrice());
                model.addAttribute("list", adviceUsers);
                model.addAttribute("id", id);
                return "/ryu/adviceRequestMentorList";
            }
            else{
                List<Member> adviceUsers = memberCRUDRepository.findByUserListOneIsPro2(reqData.getProfessional(), reqData.getCategory(), reqData.getAdvice_time(), reqData.getMaxPrice());
                model.addAttribute("list", adviceUsers);
                model.addAttribute("id", id);
                return "/ryu/ryu/adviceRequestMentorList";
            }
        }
        return "/";
    }

    @PostMapping(value = "/rematchinglist")public String rematchinglist(@RequestParam(value = "request")Long id,@RequestParam(value = "one")String one, @RequestParam(value = "two")String two, @RequestParam(value = "three")String three, Model model){
        Advicerequest reqData = adviceRequestCRUDRepository.findByRequest(id);
        if (one.equals("가격")){
            if (two.equals("시간")){
                List<Member> adviceusers = memberCRUDRepository.findByReUserListOneIsPrice1(reqData.getUser_name(), reqData.getMaxPrice(), reqData.getCategory(), reqData.getAdvice_time(), reqData.getProfessional());
                model.addAttribute("list", adviceusers);
                model.addAttribute("id", id);
                return "/ryu/reMatchingAdviceRequestMentorList";
            }
            else{
                List<Member> adviceusers = memberCRUDRepository.findByReUserListOneIsPrice2(reqData.getUser_name(), reqData.getMaxPrice(), reqData.getCategory(), reqData.getProfessional(), reqData.getAdvice_time());
                model.addAttribute("list", adviceusers);
                model.addAttribute("id", id);
                return "/ryu/reMatchingAdviceRequestMentorList";
            }
        }
        if (one.equals("시간")){
            if (two.equals("가격")){
                List<Member> adviceusers = memberCRUDRepository.findByReUserListOneIsTime1(reqData.getUser_name(), reqData.getAdvice_time(), reqData.getCategory(), reqData.getMaxPrice(), reqData.getProfessional());
                model.addAttribute("list", adviceusers);
                model.addAttribute("id", id);
                return "/ryu/reMatchingAdviceRequestMentorList";
            }
            else{
                List<Member> adviceusers = memberCRUDRepository.findByReUserListOneIsTime2(reqData.getUser_name(), reqData.getAdvice_time(), reqData.getCategory(), reqData.getProfessional(), reqData.getMaxPrice());
                model.addAttribute("list", adviceusers);
                model.addAttribute("id", id);
                return "/ryu/reMatchingAdviceRequestMentorList";
            }
        }
        if (one.equals("전문")){
            if (two.equals("시간")){
                List<Member> adviceusers = memberCRUDRepository.findByReUserListOneIsPro1(reqData.getUser_name(), reqData.getProfessional(), reqData.getCategory(), reqData.getAdvice_time(), reqData.getMaxPrice());
                model.addAttribute("list", adviceusers);
                model.addAttribute("id", id);
                return "/ryu/reMatchingAdviceRequestMentorList";
            }
            else{
                List<Member> adviceusers = memberCRUDRepository.findByReUserListOneIsPro2(reqData.getUser_name(), reqData.getProfessional(), reqData.getCategory(), reqData.getMaxPrice(), reqData.getAdvice_time());
                model.addAttribute("list", adviceusers);
                model.addAttribute("id", id);
                return "/ryu/reMatchingAdviceRequestMentorList";
            }
        }
        return "/";
    }

    @PostMapping(value = "/matchingMentor")public String matchingMentor(@RequestParam(value = "request_id")Long request_id, @RequestParam(value = "mentor_id")Long mentor_id,Model model){
        Advicerequest result = adviceRequestCRUDRepository.findByRequest(request_id);
        Member result2 = memberCRUDRepository.findByUser(mentor_id);
        Long mentor = result2.getId();
        result.setMatmentornum(mentor);
        result.setMatching("요청대기");
        result.setUser_waiting("대기");
        result.setMentor_waiting("대기");
        result.setMatmentorname(result2.getEmail());
        adviceRequestCRUDRepository.save(result);
        return "/";
    }
    @PostMapping(value = "/mentorwaitinglist")public String mentorwaitinglist(@RequestParam(value = "mentor_id")Long id, Model model){
        List<Advicerequest> result = adviceRequestCRUDRepository.findByMentorWaitingList(id);
        model.addAttribute("list", result);
        return "/ryu/mentorWaitingList";
    }

    @PostMapping(value = "/mentorwaiting")public String mentorwaiting(@RequestParam(value = "request_id")Long request_id, @RequestParam(value = "mentor_id")Long mentor_id, @RequestParam(value = "popUP")Long popUp, Model model){
        Advicerequest result = adviceRequestCRUDRepository.findByRequest(request_id);
        Member readviceuser = memberCRUDRepository.findByUser(mentor_id);
        if (popUp==0) {
            result.setMentor_waiting("거절");
        }
        else if (popUp==1) {
            result.setMentor_waiting("수락");
        }
        if (result.getUser_waiting().equals("수락") && result.getMentor_waiting().equals("수락")) {
            result.setMatching("매칭완료");
        }
        if (result.getUser_waiting().equals("수락") && result.getMentor_waiting().equals("거절")) {
            result.setMatching("매칭거절");
            readviceuser.setLatelyuser(result.getUser_name());
        }
        if (result.getUser_waiting().equals("거절") && result.getMentor_waiting().equals("수락")) {
            result.setMatching("매칭거절");
            readviceuser.setLatelyuser(result.getUser_name());
        }
        if (result.getUser_waiting().equals("거절") && result.getMentor_waiting().equals("거절")){
            result.setMatching("매칭거절");
            readviceuser.setLatelyuser(result.getUser_name());
        }
        adviceRequestCRUDRepository.save(result);
        memberCRUDRepository.save(readviceuser);
        return "/";
    }

    @PostMapping(value = "/userwaitinglist1")public String userwaitinglist1(@RequestParam(value = "id")Long id, Model model){
        List<Advicerequest> result = adviceRequestCRUDRepository.findByUserWaitingList(id);
        model.addAttribute("list", result);
        return "/ryu/userWaitingList1";
    }

    @PostMapping(value = "/userwaitinglist2")public String userwaitinglist2(@RequestParam(value = "request_id")Long request_id, @RequestParam(value = "mentor_id")Long mentor_id, Model model){
        Member adviceuser = memberCRUDRepository.findByUser(mentor_id);
        Advicerequest result = adviceRequestCRUDRepository.findByUserWaitingList2(request_id);
        model.addAttribute("list", adviceuser);
        model.addAttribute("list2", result);
        return "/ryu/userWaitingList2";
    }

    @PostMapping(value = "/userwaiting")public String userwaiting(@RequestParam(value = "request_id")Long request_id, @RequestParam(value = "user_id")Long user_id, @RequestParam(value = "popUP")Long popUp, @RequestParam(value = "mentor_id")Long mentor_id, Model model){
        Advicerequest result = adviceRequestCRUDRepository.findByUserIDRequest(request_id);
        Member readviceuser = memberCRUDRepository.findByUser(mentor_id);
        if (popUp==0)
        {
            result.setUser_waiting("거절");
        }
        else if (popUp==1) {
            result.setUser_waiting("수락");
        }
        if (result.getUser_waiting().equals("수락") && result.getMentor_waiting().equals("수락")){
            result.setMatching("매칭완료");
        }
        if (result.getUser_waiting().equals("수락") && result.getMentor_waiting().equals("거절")){
            result.setMatching("매칭거절");
            readviceuser.setLatelyuser(result.getUser_name());
        }
        if (result.getUser_waiting().equals("거절") && result.getMentor_waiting().equals("수락")){
            result.setMatching("매칭거절");
            readviceuser.setLatelyuser(result.getUser_name());
        }
        if (result.getUser_waiting().equals("거절") && result.getMentor_waiting().equals("거절")){
            result.setMatching("매칭거절");
            readviceuser.setLatelyuser(result.getUser_name());
        }
        adviceRequestCRUDRepository.save(result);
        memberCRUDRepository.save(readviceuser);
        return "/";
    }

    @GetMapping(value = "/ReMatchingList")public String ReMatchingList(Model model){
        List<Advicerequest> rematchinglist = adviceRequestCRUDRepository.findByReMatchingList();
        model.addAttribute("list", rematchinglist);
        return "/ryu/rematchinglist";
    }

    @PostMapping(value = "/reMatchingMentor")public String reMatchingMentor(@RequestParam(value = "request_id")Long request_id, @RequestParam(value = "mentor_id")Long mentor_id,Model model){
        Advicerequest result = adviceRequestCRUDRepository.findByRequest(request_id);
        Member result2 = memberCRUDRepository.findByUser(mentor_id);
        Long  mentor = result2.getId();
        result.setMatmentornum(mentor);
        result.setMatching("요청대기");
        result.setUser_waiting("대기");
        result.setMentor_waiting("대기");
        result.setMatmentorname(result2.getEmail());
        adviceRequestCRUDRepository.save(result);
        return "/";
    }
}
