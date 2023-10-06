package cha.friendly.config;

import cha.friendly.domain.ChatMessage;
import org.springframework.data.convert.ReadingConverter;
import org.springframework.data.convert.WritingConverter;
import org.springframework.core.convert.converter.Converter;

@ReadingConverter
public class StringToMessageTypeConverter implements Converter<String, ChatMessage.MessageType> {
    public ChatMessage.MessageType convert(String source) {
        return ChatMessage.MessageType.valueOf(source);
    }
}
