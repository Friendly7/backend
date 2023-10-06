package cha.friendly.config;

import cha.friendly.domain.ChatMessage;
import org.springframework.core.convert.converter.Converter;
import org.springframework.data.convert.WritingConverter;

@WritingConverter
public class MessageTypeToStringConverter implements Converter<ChatMessage.MessageType, String> {
    public String convert(ChatMessage.MessageType source) {
        return source.name();
    }
}
