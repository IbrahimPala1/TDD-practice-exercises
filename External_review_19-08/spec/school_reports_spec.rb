require './school_reports'

RSpec.describe 'school reports' do 
    it 'returns Amber: 1 when input is Amber' do 
        expect(add_scores("Amber")).to eq "Amber1"
    end 
end 