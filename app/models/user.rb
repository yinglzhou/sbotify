# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  name            :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    validates :email, 
        format:  with: { URI::MailTo::EMAIL_REGEXP },
        length: { in: 3..255 }
    validates :session_token, 
        presence: true, uniqueness:true 
    validates :password, 
        length: { in: 6..255 }, 
        allow_nil: true

end
