require './school_reports'

RSpec.describe 'school reports' do 
    it 'returns Amber: 1 when input is Amber' do 
        expect(add_scores("Amber")).to eq "Amber: 1"
    end 
    it 'returns Red: 1 when input is Red' do 
        expect(add_scores("Red")).to eq "Red: 1"
    end 
    it 'returns Green: 1 when input is Greem' do 
        expect(add_scores("Green")).to eq "Green: 1"
    end 
end 