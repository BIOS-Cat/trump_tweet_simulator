require 'rails_helper'

RSpec.describe Tweet, type: :model do
    before do 
        @tweet = Tweet.new(text: 'Not a lot of unit tests here. Sad.')
    end

    subject { @tweet }

    describe "when text is not set" do 
        before { @tweet.text = '' }

        it { should_not be_valid }
    end
end
