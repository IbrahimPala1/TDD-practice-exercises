require './middle_letter'

RSpec.describe 'middle_letter' do 
    it 'checks one letter returns letter' do
        expect(middle_letter('a')).to eq "a"
    end 
end