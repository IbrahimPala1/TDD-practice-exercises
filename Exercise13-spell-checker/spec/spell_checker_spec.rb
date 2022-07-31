require './spell_checker'

RSpec.describe 'spell_checker' do
    it "checks that correct word returns correct word" do
        expect(checking_words("There")).to eq "There"
    end 
end 
