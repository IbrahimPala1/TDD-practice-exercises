def checking_words(words)
    word_bank = ["There", "word", "was", "a", "sequence", "This", "is", "interesting", "world"]
    splitting = words.split(" ")
    return splitting.map do |word| 
    if word_bank.include?(word)
         word
    else
         "~" + word + "~"
    end 
end .join(' ')
end 