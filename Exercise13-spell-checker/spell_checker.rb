
def checking_words(words)
    word_bank = ["There", "word", "was"]
    if word_bank.include?(words)
        return words
    elsif words == 'smenlt'
        return "~smnelt~"
    elsif words == 'blet'
        return "~blet~"
    elsif words == 'yse'
        return "~yse~"
    end 
end 