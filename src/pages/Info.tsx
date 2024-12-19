import { ChangePassword, UpdateInfo } from "../components/common";
import { Button } from "../components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../components/ui/dialog";

const Info = () => {
  return (
    <div className="bg-white rounded-[0.5rem] flex-[1] py-[58px] px-[62px]">
      <div>
        <h3 className="text-[2.25em] font-medium mb-[1.125rem]">
          Thông tin tài khoản
        </h3>
      </div>
      <div>
        {/* form thông tin tài khoản */}
        <div className="mb-[3rem]">
          <div className="flex items-center text-[18px] mb-6">
            <div className="w-[300px] max-w-[50%] text-[#777777]">
              Họ và tên
            </div>
            <div>Thái Quang</div>
          </div>
          <div className="flex items-center text-[18px] mb-6">
            <div className="w-[300px] max-w-[50%] text-[#777777]">
              Số điện thoại
            </div>
            <div>0857176357</div>
          </div>
          <div className="flex items-center text-[18px] mb-6">
            <div className="w-[300px] max-w-[50%] text-[#777777]">
              Giới tính
            </div>
            <div>Nam</div>
          </div>
          <div className="flex items-center text-[18px] mb-6">
            <div className="w-[300px] max-w-[50%] text-[#777777]">
              Ngày sinh
              <i className="text-[0.9rem] text-[#999]">(Ngày/tháng/năm)</i>
            </div>
            <div>0857176357</div>
          </div>
          <div className="flex items-center text-[18px] mb-6">
            <div className="w-[300px] max-w-[50%] text-[#777777]">
              Chiều cao
            </div>
            <div>170cm</div>
          </div>
          <div className="flex items-center text-[18px] mb-6">
            <div className="w-[300px] max-w-[50%] text-[#777777]">Cân nặng</div>
            <div>58kg</div>
          </div>
          <div className="flex items-center text-[18px] mb-6">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  className="h-[50px] font-bold uppercase border border-black rounded-full"
                  variant={"outline"}
                >
                  Cập nhật
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-[700px] max-h-[75vh]">
                <UpdateInfo />
              </DialogContent>
            </Dialog>
          </div>
        </div>
        {/* Thông tin đăng nhập */}
        <h3 className="text-[2.25em] font-medium mb-[1.125rem]">
          Thông tin đăng nhập
        </h3>
        <div className="flex items-center text-[18px] mb-6">
          <div className="w-[300px] max-w-[50%] text-[#777777]">Email</div>
          <div>thaiquangqt2003@gmail.com</div>
        </div>
        <div className="flex items-center text-[18px] mb-6">
          <div className="w-[300px] max-w-[50%] text-[#777777]">Mật khẩu</div>
          <div>**********************</div>
        </div>
        <div className="flex items-center text-[18px] mb-6">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                className="h-[50px] font-bold uppercase border border-black rounded-full"
                variant={"outline"}
              >
                Cập nhật
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-[700px] max-h-[75vh]">
              <ChangePassword />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Info;
