require './middle_letter'

RSpec.describe 'middle_letter' do 
    it 'checks one letter returns letter' do
        expect(middle_letter('a')).to eq "a"
    end 
    it 'checks secojd letter returns letter' do
        expect(middle_letter('b')).to eq "b"
    end 
    it 'checks secojd letter returns letter' do
        expect(middle_letter('me')).to eq "me"
    end 
end