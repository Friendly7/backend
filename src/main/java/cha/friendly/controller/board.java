package cha.friendly.controller;

import cha.friendly.session.SessionConst;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import cha.friendly.domain.*;
import cha.friendly.repository.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;


import javax.servlet.http.HttpSession;
import java.util.List;

@RestController
public class board {
    @Autowired
    AreaBoardCRUDRepository areaBoardCRUDRepository;
    @Autowired
    AreaComentCRUDRepository areaComentCRUDRepository;
    @Autowired
    MemberCRUDRepository memberCRUDRepository;
    @Autowired
    BoardCRUDRepository boardCRUDRepository;
    @Autowired
    ComentCRUDRepository comentCRUDRepository;

    @PostMapping(value = "/moveFreeBoard") public  String moveFreeBoard(@RequestParam(value = "user_id")Long user_id, Model model) {
        Member member = memberCRUDRepository.findByMember(user_id);
        List<Board> searchBoard = boardCRUDRepository.findAll();
        model.addAttribute("board", searchBoard);
        model.addAttribute("member", member);
        return "freeBoard";
    }

    @PostMapping(value = "/moveWrite") public  String moveWrite(@RequestParam(value = "user_id")Long user_id, Model model) {
        Member member = memberCRUDRepository.findByMember(user_id);
        model.addAttribute("member", member);
        return "board/Write";
    }

    @PostMapping(value = "/write") public String Write(@RequestParam(value = "user_id")Long user_id, @RequestParam(value = "board_name")String board_name,
                                                       @RequestParam(value = "content")String content, HttpSession session) {
        Member member = memberCRUDRepository.findByMember(user_id);
        Board board = new Board();
        board.setUser_name(member.getName());
        board.setUser_id(member.getId());
        board.setBoard_name(board_name);
        board.setContent(content);
        boardCRUDRepository.save(board);
        session.setAttribute("user_id", member.getId());

        return "redirect:/reFreeBoard";
    }

    @GetMapping(value = "/reFreeBoard") public String reFreeBoard(Long user_id, Model model, HttpSession session) {
        user_id = Long.valueOf(String.valueOf(session.getAttribute("user_id")));
        Member member = memberCRUDRepository.findByMember(user_id);
        List<Board> searchBoard = boardCRUDRepository.findAll();
        model.addAttribute("member", member);
        model.addAttribute("board", searchBoard);
        return "freeBoard";
    }

    @PostMapping(value = "/viewContent") public String viewContent(@RequestParam(value = "user_id")Long user_id, @RequestParam(value = "board_id")Long board_id, Model model) {
        Member member = memberCRUDRepository.findByMember(user_id);
        Board board = boardCRUDRepository.findByContent(board_id);
        List<Coment> coment = comentCRUDRepository.findByComentList(board.getId());
        model.addAttribute("member",member);
        model.addAttribute("board",board);
        model.addAttribute("comentList", coment);
        return "board/content";
    }

    @PostMapping(value = "/moveUpdateFreeBoard") public String moveUpdateFreeBoard(@RequestParam(value = "user_id")Long user_id, @RequestParam(value = "board_id")Long board_id,
                                                                                   Model model) {
        Member member = memberCRUDRepository.findByMember(user_id);
        Board board = boardCRUDRepository.findByContent(board_id);
        model.addAttribute("board", board);
        model.addAttribute("member", member);
        return "board/updateBoard";
    }

    @PostMapping(value = "/updateFreeBoard") public String updateFreeBoard(@RequestParam(value = "user_id")Long user_id, @RequestParam(value = "board_id")Long board_id,
                                                                           @RequestParam(value = "board_name")String board_name, @RequestParam(value = "content")String content,
                                                                           HttpSession session) {
        Member member = memberCRUDRepository.findByMember(user_id);
        Board board = boardCRUDRepository.findByContent(board_id);
        board.setUser_name(member.getName());
        board.setUser_id(member.getId());
        board.setBoard_name(board_name);
        board.setContent(content);
        boardCRUDRepository.save(board);
        session.setAttribute("user_id", member.getId());
        return "redirect:/reFreeBoard";
    }


    @PostMapping(value = "/moveDeleteFreeBoard") public String moveDeleteFreeBoard(@RequestParam(value = "user_id")Long user_id, @RequestParam(value = "board_id")Long board_id,
                                                                                   HttpSession session) {
        Member member = memberCRUDRepository.findByMember(user_id);
        Board board = boardCRUDRepository.findByContent(board_id);
        boardCRUDRepository.delete(board);
        session.setAttribute("user_id", member.getId());
        return "redirect:/reFreeBoard";
    }


    @PostMapping(value = "/moveWriteComent") public String moveWriteComent(@RequestParam(value = "user_id")Long user_id, @RequestParam(value = "board_id")Long board_id, Model model) {
        Member member = memberCRUDRepository.findByMember(user_id);
        Board board = boardCRUDRepository.findByContent(board_id);
        model.addAttribute("member",member);
        model.addAttribute("board",board);
        return "board/writeComent";
    }

    @PostMapping(value = "/comentWrite") public String Write(@RequestParam(value = "user_id")Long user_id, @RequestParam(value = "board_id")Long board_id,
                                                             @RequestParam(value = "coment")String coments, HttpSession session) {
        Member member = memberCRUDRepository.findByMember(user_id);
        Board board = boardCRUDRepository.findByContent(board_id);
        Coment coment = new Coment();
        coment.setBoard_id(board.getId());
        coment.setUser_id(member.getId());
        coment.setComent(coments);
        coment.setUser_name(member.getName());
        comentCRUDRepository.save(coment);
        session.setAttribute("user_id", member.getId());
        session.setAttribute("board_id", board.getId());
        return "redirect:/reComentWrite";
    }

    @GetMapping(value = "/reComentWrite") public String reComentWrite(Long user_id, Long board_id, Model model, HttpSession session) {
        user_id = Long.valueOf(String.valueOf(session.getAttribute("user_id")));
        board_id = Long.valueOf(String.valueOf(session.getAttribute("board_id")));
        Member member = memberCRUDRepository.findByMember(user_id);
        Board board = boardCRUDRepository.findByContent(board_id);
        List<Coment> coment = comentCRUDRepository.findByComentList(board.getId());
        model.addAttribute("member", member);
        model.addAttribute("board", board);
        model.addAttribute("comentList", coment);
        return "board/content";
    }
    @PostMapping(value = "/moveUpdateComent") public String moveUpdateComent(@RequestParam(value = "user_id")Long user_id,
                                                                             @RequestParam(value = "board_id")Long board_id,  @RequestParam(value = "coment_id")Long coment_id,
                                                                             Model model) {
        Member member = memberCRUDRepository.findByMember(user_id);
        Board board = boardCRUDRepository.findByContent(board_id);
        Coment coment = comentCRUDRepository.findByComent(coment_id);
        model.addAttribute("member",member);
        model.addAttribute("board",board);
        model.addAttribute("coment",coment);
        return "board/updateComent";
    }

    @PostMapping(value = "/comentUpdate") public String comentUpdate(@RequestParam(value = "user_id")Long user_id, @RequestParam(value = "board_id")Long board_id,
                                                                     @RequestParam(value = "coment_id")Long coment_id, @RequestParam(value = "coment")String coments,
                                                                     HttpSession session) {
        Member member = memberCRUDRepository.findByMember(user_id);
        Board board = boardCRUDRepository.findByContent(board_id);
        Coment coment = comentCRUDRepository.findByComent(coment_id);
        coment.setBoard_id(board.getId());
        coment.setUser_id(member.getId());
        coment.setComent(coments);
        coment.setUser_name(member.getName());
        comentCRUDRepository.save(coment);
        session.setAttribute("user_id", member.getId());
        session.setAttribute("board_id", board.getId());
        return "redirect:/reComentWrite";
    }

    @PostMapping(value = "/DeleteComent") public String DeleteComent(@RequestParam(value = "user_id")Long user_id, @RequestParam(value = "board_id")Long board_id,
                                                                     @RequestParam(value = "coment_id")Long coment_id, HttpSession session) {
        Member member = memberCRUDRepository.findByMember(user_id);
        Board board = boardCRUDRepository.findByContent(board_id);
        Coment coment = comentCRUDRepository.findByComent(coment_id);
        comentCRUDRepository.delete(coment);
        session.setAttribute("user_id", member.getId());
        session.setAttribute("board_id", board.getId());
        return "redirect:/reComentWrite";
    }














    @PostMapping(value = "/moveAreaBoard")
    public  List<Areaboard> moveAreaBoard(@SessionAttribute(name = SessionConst.LOGIN_MEMBER, required = false) Member loginMember){
        Member member = memberCRUDRepository.findByMember(loginMember.getId());
        Address address = member.getAddress();
        List<Areaboard> searchBoard = areaBoardCRUDRepository.findByAreaBoardList(address.getCity(), address.getDong(), address.getGu());
        System.out.println(searchBoard);
        return searchBoard;
    }

    @PostMapping(value = "/moveAdminAreaBoard") public  String moveAdminAreaBoard(@RequestParam(value = "user_id")Long user_id, Model model) {
        Member member = memberCRUDRepository.findByMember(user_id);
        List<Areaboard> searchBoard = areaBoardCRUDRepository.findAll();
        model.addAttribute("board", searchBoard);
        model.addAttribute("member", member);
        return "areaBoard";
    }

    @PostMapping(value = "/moveAreaBoardWrite") public  String moveAreaBoardWrite(@RequestParam(value = "user_id")Long user_id, Model model) {
        Member member = memberCRUDRepository.findByMember(user_id);
        model.addAttribute("member", member);
        return "areaBoard/areaWrite";
    }

    @PostMapping(value = "/writeAreaBoard") public String writeAreaBoard(@RequestParam(value = "user_id")Long user_id, @RequestParam(value = "board_name")String board_name,
                                                       @RequestParam(value = "content")String content, HttpSession session) {
        Member member = memberCRUDRepository.findByMember(user_id);
        Areaboard areaboard = new Areaboard();
        areaboard.setUser_name(member.getName());
        areaboard.setUser_id(member.getId());
        areaboard.setBoard_name(board_name);
        areaboard.setContent(content);
        areaboard.setAddress(member.getAddress());
        areaBoardCRUDRepository.save(areaboard);
        session.setAttribute("user_id", member.getId());
        if (member.getEmail().equals("admin")){
            return "redirect:/reAdminAreaBoard";
        }

        return "redirect:/reAreaBoard";
    }

    @GetMapping(value = "/reAreaBoard") public String reAreaBoard(Long user_id, Model model, HttpSession session) {
        user_id = Long.valueOf(String.valueOf(session.getAttribute("user_id")));
        Member member = memberCRUDRepository.findByMember(user_id);
        Address address = member.getAddress();
        List<Areaboard> searchBoard = areaBoardCRUDRepository.findByAreaBoardList(address.getCity(), address.getDong(), address.getGu());
        model.addAttribute("member", member);
        model.addAttribute("board", searchBoard);
        return "areaBoard";
    }

    @GetMapping(value = "/reAdminAreaBoard") public String reAdminAreaBoard(Long user_id, Model model, HttpSession session) {
        user_id = Long.valueOf(String.valueOf(session.getAttribute("user_id")));
        Member member = memberCRUDRepository.findByMember(user_id);
        List<Areaboard> searchBoard = areaBoardCRUDRepository.findAll();
        model.addAttribute("member", member);
        model.addAttribute("board", searchBoard);
        return "areaBoard";
    }


    @PostMapping(value = "/viewAreaContent") public List<Areaboard> viewAreaContent(@RequestBody String id) {
        id= id.substring(0,1);
        Long boardId = Long.valueOf(id);
        System.out.println(boardId);
        Areaboard areaboard = areaBoardCRUDRepository.findByContent(boardId);
        List<Areaboard> areaboards = areaBoardCRUDRepository.findByContents(boardId);
        List<Coment> coment = comentCRUDRepository.findByComentList(areaboard.getId());
        System.out.println(areaboards);
        return areaboards;
    }

    @PostMapping(value = "/moveUpdateAreaBoard") public String moveUpdateAreaBoard(@RequestParam(value = "user_id")Long user_id, @RequestParam(value = "board_id")Long board_id,
                                                                                   Model model) {
        Member member = memberCRUDRepository.findByMember(user_id);
        Areaboard areaboard = areaBoardCRUDRepository.findByContent(board_id);
        model.addAttribute("board", areaboard);
        model.addAttribute("member", member);
        return "areaBoard/updateAreaBoard";
    }

    @PostMapping(value = "/updateAreaBoard") public String updateAreaBoard(@RequestParam(value = "user_id")Long user_id, @RequestParam(value = "board_id")Long board_id,
                                                                           @RequestParam(value = "board_name")String board_name, @RequestParam(value = "content")String content,
                                                                           HttpSession session) {
        Member member = memberCRUDRepository.findByMember(user_id);
        Areaboard areaboard = areaBoardCRUDRepository.findByContent(board_id);
        areaboard.setUser_name(member.getName());
        areaboard.setUser_id(member.getId());
        areaboard.setBoard_name(board_name);
        areaboard.setContent(content);
        areaBoardCRUDRepository.save(areaboard);
        session.setAttribute("user_id", member.getId());
        if (member.getEmail().equals("admin")){
            return "redirect:/reAdminAreaBoard";
        }
        return "redirect:/reAreaBoard";
    }


    @PostMapping(value = "/moveDeleteAreaBoard") public String moveDeleteAreaBoard(@RequestParam(value = "user_id")Long user_id, @RequestParam(value = "board_id")Long board_id,
                                                                                   HttpSession session) {
        Member member = memberCRUDRepository.findByMember(user_id);
        Areaboard areaboard = areaBoardCRUDRepository.findByContent(board_id);
        areaBoardCRUDRepository.delete(areaboard);
        session.setAttribute("user_id", member.getId());
        if (member.getEmail().equals("admin")){
            return "redirect:/reAdminAreaBoard";
        }
        return "redirect:/reAreaBoard";
    }


    @PostMapping(value = "/moveAreaWriteComent") public String moveAreaWriteComent(@RequestParam(value = "user_id")Long user_id, @RequestParam(value = "board_id")Long board_id, Model model) {
        Member member = memberCRUDRepository.findByMember(user_id);
        Areaboard areaboard = areaBoardCRUDRepository.findByContent(board_id);
        model.addAttribute("member",member);
        model.addAttribute("board",areaboard);
        return "areaBoard/writeAreaComent";
    }

    @PostMapping(value = "/areaComentWrite") public String areaComentWrite(@RequestParam(value = "user_id")Long user_id, @RequestParam(value = "board_id")Long board_id,
                                                             @RequestParam(value = "coment")String coments, HttpSession session) {
        Member member = memberCRUDRepository.findByMember(user_id);
        Areaboard areaboard = areaBoardCRUDRepository.findByContent(board_id);
        Coment coment = new Coment();
        coment.setBoard_id(areaboard.getId());
        coment.setUser_id(member.getId());
        coment.setComent(coments);
        coment.setUser_name(member.getName());
        comentCRUDRepository.save(coment);
        session.setAttribute("user_id", member.getId());
        session.setAttribute("board_id", areaboard.getId());
        return "redirect:/reAreaComentWrite";
    }

    @GetMapping(value = "/reAreaComentWrite") public String reAreaComentWrite(Long user_id, Long board_id, Model model, HttpSession session) {
        user_id = Long.valueOf(String.valueOf(session.getAttribute("user_id")));
        board_id = Long.valueOf(String.valueOf(session.getAttribute("board_id")));
        Member member = memberCRUDRepository.findByMember(user_id);
        Areaboard areaboard = areaBoardCRUDRepository.findByContent(board_id);
        List<Coment> coment = comentCRUDRepository.findByComentList(areaboard.getId());
        model.addAttribute("member", member);
        model.addAttribute("board", areaboard);
        model.addAttribute("comentList", coment);
        return "areaBoard/areaContent";
    }
    @PostMapping(value = "/moveUpdateAreaComent") public String moveUpdateAreaComent(@RequestParam(value = "user_id")Long user_id,
                                                                             @RequestParam(value = "board_id")Long board_id,  @RequestParam(value = "coment_id")Long coment_id,
                                                                             Model model) {
        Member member = memberCRUDRepository.findByMember(user_id);
        Areaboard areaboard = areaBoardCRUDRepository.findByContent(board_id);
        Coment coment = comentCRUDRepository.findByComent(coment_id);
        model.addAttribute("member",member);
        model.addAttribute("board",areaboard);
        model.addAttribute("coment",coment);
        return "areaBoard/updateAreaComent";
    }

    @PostMapping(value = "/areaComentUpdate") public String areaComentUpdate(@RequestParam(value = "user_id")Long user_id, @RequestParam(value = "board_id")Long board_id,
                                                                     @RequestParam(value = "coment_id")Long coment_id, @RequestParam(value = "coment")String coments,
                                                                     HttpSession session) {
        Member member = memberCRUDRepository.findByMember(user_id);
        Areaboard areaboard = areaBoardCRUDRepository.findByContent(board_id);
        Coment coment = comentCRUDRepository.findByComent(coment_id);
        coment.setBoard_id(areaboard.getId());
        coment.setUser_id(member.getId());
        coment.setComent(coments);
        coment.setUser_name(member.getName());
        comentCRUDRepository.save(coment);
        session.setAttribute("user_id", member.getId());
        session.setAttribute("board_id", areaboard.getId());
        return "redirect:/reAreaComentWrite";
    }

    @PostMapping(value = "/DeleteAreaComent") public String DeleteAreaComent(@RequestParam(value = "user_id")Long user_id, @RequestParam(value = "board_id")Long board_id,
                                                                     @RequestParam(value = "coment_id")Long coment_id, HttpSession session) {
        Member member = memberCRUDRepository.findByMember(user_id);
        Areaboard areaboard = areaBoardCRUDRepository.findByContent(board_id);
        Coment coment = comentCRUDRepository.findByComent(coment_id);
        comentCRUDRepository.delete(coment);
        session.setAttribute("user_id", member.getId());
        session.setAttribute("board_id", areaboard.getId());
        return "redirect:/reAreaComentWrite";
    }
}
