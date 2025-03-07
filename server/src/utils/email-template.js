export const generateConfrimTemplate = ({
  userName,
  courseTitle,
  courseImage,
  price,
  location,
  dateTime,
}) => `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 0; background-color: #f4f7fa;">
        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <tr>
                <td style="background-color: #4a90e2; text-align: center; padding: 20px;">
                    <p style="font-size: 36px; line-height: 42px; font-weight: 700; color: #fff;">Booking Confrimation✅</p>
                </td>
            </tr>
            <tr>
                <td style="padding: 40px 30px;">
                    <p style="font-size: 16px; margin-bottom: 25px;">Hello <strong style="color: #4a90e2;">${userName}</strong>,</p>
                    
                    <p style="font-size: 16px; margin-bottom: 25px;">Thank you for choosing GolfBooking! We are thrilled to have you on board and can’t wait for you to experience an amazing day at the golf course.</p>
  
                    <p style="font-size: 16px; margin-bottom: 25px;">Your upcoming session details:</p>
  
                    <table cellpadding="15" cellspacing="0" border="0" width="100%" style="background-color: #f0f7ff; border-radius: 10px; margin-bottom: 25px;">
                        <tr>
                            <td colspan="2" style="text-align: center; padding: 15px;">
                                <img src="${courseImage}" alt="${courseTitle}" style="width: 100%; max-width: 500px; border-radius: 8px;">
                            </td>
                        </tr>
                        <tr>
                            <td style="font-size: 16px; border-bottom: 1px solid #d0e3ff;">
                                <strong>Course:</strong> ${courseTitle}
                            </td>
                        </tr>
                        <tr>
                            <td style="font-size: 16px; border-bottom: 1px solid #d0e3ff;">
                                <strong>Location:</strong> ${location}
                            </td>
                        </tr>
                        <tr>
                            <td style="font-size: 16px; border-bottom: 1px solid #d0e3ff;">
                                <strong>Date & Time:</strong> ${dateTime}
                            </td>
                        </tr>
                        <tr>
                            <td style="font-size: 16px;">
                                <strong>Price:</strong> ${price}
                            </td>
                        </tr>
                    </table>
  
                    <p style="font-size: 16px; margin-bottom: 25px;">
                        Get ready to enjoy the fresh air, lush greens, and the perfect swing! Whether you're refining your skills or just having fun, we hope this session brings you relaxation and great memories.
                    </p>
  
                    <p style="font-size: 16px; margin-bottom: 25px;">
                        If you need to make any changes to your booking, feel free to visit our <a href="#" style="color: #4a90e2; text-decoration: none;">support page</a>. We're always happy to assist you.
                    </p>
  
                    <p style="font-size: 16px; margin-top: 30px;">
                        Wishing you a fantastic day on the course!<br>
                        <strong>Cimso</strong>
                    </p>
                </td>
            </tr>
            <tr>
                <td style="background-color: #f0f7ff; padding: 20px; text-align: center; font-size: 14px;">
                    <p style="margin: 0 0 10px;">
                        Cimso Online Golf Booking Inc. 
                    </p>
                    <p style="margin: 0;">
                        <a href="#" style="color: #4a90e2; text-decoration: none; margin: 0 10px;">Unsubscribe</a> | 
                        <a href="#" style="color: #4a90e2; text-decoration: none; margin: 0 10px;">Privacy Policy</a> | 
                        <a href="#" style="color: #4a90e2; text-decoration: none; margin: 0 10px;">Terms of Service</a>
                    </p>
                    <p style="margin-top: 20px; font-size: 12px; color: #888;">
                      Please note: This email was sent automatically. There is no need to reply. If you have any questions or need assistance, feel free to contact our support team via the link above.
                  </p>
                </td>
            </tr>
        </table>
    </div>
  `;

export const generateBookingCancellationTemplate = ({
  userName,
  courseName,
  courseImage,
  price,
  cancellationDate,
}) => `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 0; background-color: #f4f7fa;">
        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <tr>
                <td style="background-color: #e74c3c; text-align: center; padding: 20px;">
                    <p style="font-size: 54px; line-height: 54px; font-weight: 800; color: white;">Booking Cancelled✅</p>
                </td>
            </tr>
            <tr>
                <td style="padding: 40px 30px;">                
                    <p style="font-size: 16px; margin-bottom: 25px;">Hello <strong style="color: #e74c3c;">${userName}</strong>,</p>
                    
                    <p style="font-size: 16px; margin-bottom: 25px;">Your booking has successfully canceled and below is the detail of your booking:</p>
                    
                    <table cellpadding="15" cellspacing="0" border="0" width="100%" style="background-color: #f9e5e5; border-radius: 10px; margin-bottom: 25px;">
                        <tr>
                            <td style="font-size: 16px; text-align: center;">
                                <img src="${courseImage}" alt="Course Image" style="max-width: 100%; height: auto; border-radius: 10px;">
                            </td>
                        </tr>
                        <tr>
                            <td style="font-size: 16px; border-bottom: 1px solid #e2b1b1;">
                                <strong>Course:</strong> ${courseName}
                            </td>
                        </tr>
                        
                        <tr>
                            <td style="font-size: 16px; border-bottom: 1px solid #e2b1b1;">
                                <strong>Price:</strong> ${price}
                            </td>
                        </tr>
                    </table>
  
                    <p style="font-size: 16px; margin-bottom: 25px;">The cancellation was processed on <strong>${cancellationDate}</strong>.</p>
                    <p style="font-size: 16px; margin-top: 30px;">We hope to see you back soon for your next round of golf! If you decide to rebook or have any questions, we're always here to assist you.</p>
                    <p style="font-size: 16px; margin-top: 30px;">If you have any questions or need to make another booking, feel free to <a href="mailto:support@yourdomain.com" style="color: #e74c3c; text-decoration: none;">contact our support team</a>.</p>
                    
                    <p style="font-size: 16px; margin-top: 30px;">
                        Best regards,<br>
                        <strong>Cimso</strong>
                    </p>
                </td>
            </tr>
            <tr>
                <td style="background-color: #f9e5e5; padding: 20px; text-align: center; font-size: 14px;">
                    <p style="margin: 0 0 10px;">
                        Cimso Online Golf Booking Inc. 
                    </p>
                    <p style="margin: 0;">
                        <a href="#" style="color: #e74c3c; text-decoration: none; margin: 0 10px;">Unsubscribe</a> | 
                        <a href="#" style="color: #e74c3c; text-decoration: none; margin: 0 10px;">Privacy Policy</a> | 
                        <a href="#" style="color: #e74c3c; text-decoration: none; margin: 0 10px;">Terms of Service</a>
                    </p>
                </td>
            </tr>
        </table>
    </div>
    `;
