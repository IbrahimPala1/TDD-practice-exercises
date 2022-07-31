
def checking_words(words)
    word_bank = ["There", "word", "was"]
    if word_bank.include?(words)
        return words
    else
        return "~" +words + "~"
    end 
end 