require './calculator'
RSpec.describe 'calculator' do 
    it 'checks that one number string returns a numbered string' do
        expect(calculator("1")).to eq ["1", 1]
    end 
    it 'checks that one number string returns a numbered string' do
        expect(calculator("4")).to eq ["4", 4]
    end 
    it 'checks that one number string returns a numbered string' do
        expect(calculator("3")).to eq ["3", 3]
    end 
    it 'checks that one number string returns a numbered string' do
        expect(calculator("1 + 1")).to eq ["1 + 1", 2]
    end 
end 