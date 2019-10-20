export default {
    HEADER_MARKET: "Thị trường",
    HEADER_TRADING: "Giao dịch",
    HEADER_NEWS: "Tin tức",
    HEADER_NOTI: "Thông báo",
    HEADER_SETTINGS: "Cá nhân",
    HEADER_ORDER_HISTORY: "Lich sử giao dịch",
    HEADER_ORDER_DETAIL: "Chi tiết lệnh",
    HEADER_BUTTON_ALERT: "Tin báo",
    HEADER_BUTTON_HISTORY: "Lịch sử",
    HEADER_BUTTON_BACK: "Trở về",
    TAB_FAVORITE: "Ưa thích",
    TAB_AGRICULTURE: "Nông sản",
    TAB_METAL: "Kim loại",
    TAB_FUEL: "Nhiên liệu",
    TAB_ENERGY: "Năng lượng",
    MARKTET_TITLE: "Mặt hàng",
    MARKET_PRICE: "Giá khớp",
    MARKET_CHANGE: "Thay đổi",
    PRODUCT_TERM: "Kỳ hạn",
    PRODUCT_CHANGE: "Thay đổi",
    PRODUCT_OPEN_PRICE: "Mở cửa",
    PRODUCT_CLOSE_PRICE: "Đóng cửa",
    PRODUCT_HIGH_PRICE: "Cao nhất",
    PRODUCT_LOW_PRICE: "Thấp nhất",
    TRADING_BALANCE: "Tài khoản (USD)",
    TRADING_CREDIT: "Tín dụng",
    TRADING_RESIDUAL_DEPOSIT: "Ký quỹ còn dư",
    TRADING_LEVERAGE: "Đòn bẩy",
    TRADING_FREE_MARGIN: "Ký quỹ miễn phí",
    TRADING_OPEN_ORDER: "Lệnh đang giao dịch",
    ERROR_INVALID_AUTH_INFO: "Thông tin đăng nhập không hợp lệ!",
    ERROR_DEFAULT_TRY_AGAIN: "Có lỗi xảy ra, vui lòng thử lại sau!",
    ERROR_EXISTED_AUTH_INFO: "Tài khoản đã tồn tại!",
    ERROR_NAN: "Vui lòng nhập số khi đặt lệnh!",
    ERROR_LOT_ZERO: "Số lượng giao dịch phải lớn hơn 0",
    ERROR_BUY_LIMIT: "Giá đặt lệnh phải thấp hơn giá mua vào",
    ERROR_SELL_LIMIT: "Giá đặt lệnh phải cao hơn giá bán ra",
    ERROR_BUY_STOP: "Giá đặt lệnh phải cao hơn giá mua vào",
    ERROR_SELL_STOP: "Giá đặt lệnh phải thấp hơn giá bán ra",
    ERROR_BUY_STOP_LOSS: "Giá dừng lỗ phải thấp hơn giá đặt lệnh",
    ERROR_SELL_STOP_LOSS: "Giá dừng lỗ phải cao hơn giá đặt lệnh",
    ERROR_BUY_TAKE_PROFIT: "Giá chốt lời phải cao hơn giá đặt lệnh",
    ERROR_SELL_TAKE_PROFIT: "Giá chốt lời phải thấp hơn giá đặt lệnh",
    AUTH_SUCCESS: "Thành công",
    AUTH_LOGOUT: "Đăng xuất",
    AUTH_LOGOUT_FAIL: "Đăng xuất thất bại, vui lòng thử lại sau",
    SETTINGS_EDIT_PROFILE: "Chỉnh sửa thông tin",
    SETTINGS_NOT_YET_UPDATED: "Chưa cập nhật",
    SETTINGS_PHONE: "Số điện thoại",
    SETTINGS_NAME: "Họ tên",
    SETTINGS_EMAIL: "Email",
    SETTINGS_ADDRESS: "Địa chỉ",
    SETTINGS_SEX: "Giới tính",
    SETTINGS_DATE_OF_BIRTH: "Ngày sinh",
    SETTINGS_GENDER_MALE: "Nam",
    SETTINGS_GENDER_FEMALE: "Nữ",
    SETTINGS_EDIT_PROFILE: "Cập nhật thông tin",
    SETTINGS_FINISH_UPDATE: "Hoàn thành",
    SETTINGS_UPDATE_SUCCESS: "Cập nhật thành công",
    SETTINGS_UPDATE_FAIL: "Cập nhật thất bại",
    ORDER_PLACE_ORDER: "Đặt lệnh",
    ORDER_SELL: "Bán",
    ORDER_BUY: "Mua",
    ORDER_BY_MARKET: "Giá thị trường",
    ORDER_CREATE_SUCESS: "Đặt lệnh thành công",
    ORDER_TERM: "Kỳ hạn",
    ORDER_TYPE: "Loại",
    ORDER_CLOSE: "Chốt lệnh",
    ORDER_CREATE_FAIL: "Đặt lệnh thất bại, thử lại sau!",
    ORDER_CLOSE_SUCCESS: "Chốt lệnh thành công!",
    ORDER_CLOSE_FAIL: "Chốt lệnh thất bại!",
    PRICES_PLACE_ALARM: "Đặt tin báo",
    PRICES_PLACE_ORDER: "Đặt lệnh"
};

export const commodityNames = {
    KHO_DAU_TUONG: "KHÔ ĐẬU TƯƠNG",
    DAU_DAU_TUONG: "DẦU ĐẬU TƯƠNG",
    LUA_MI: "LÚA MÌ",
    DAU_TUONG: "ĐẬU TƯƠNG",
    NGO: "NGÔ",
    CA_PHE: "CÀ PHÊ",
    CA_PHE_ROBUSTA: "CÀ PHÊ ROBUSTA",
    CA_PHE_ARABICA: "CÀ PHÊ ARABICA",
    DUONG: "ĐƯỜNG",
    COTTON: "BÔNG",
    CAO_SU: "CAO SU",
    CA_CAO: "CA CAO",
    TIEU: "TIÊU",
    QUANG_SAT: "QUẶNG SẮT",
    BACH_KIM: "BẠCH KIM",
    BAC: "BẠC",
    DONG: "ĐỒNG",
    DAU_WTI: "DẦU WTI MINI",
    DAU_LUU_HUYNH: "DẦU ÍT LƯU HUỲNH",
    XANG_PHA_CHE: "XĂNG PHA CHẾ",
    KHI_TU_NHIEN: "KHÍ TỰ NHIÊN",
    DAU_THO: "DẦU THÔ",
    DAU_THO_BRENT: "DẦU THÔ BRENT"
};

export const orderTypes = {
    0: "Mua",
    1: "Bán",
    2: "Mua giới hạn",
    3: "Bán giới hạn",
    4: "Mua dừng",
    5: "Bán dừng"
};

export const priceColumns = [
    "Kỳ hạn",
    "Giá khớp",
    "Thay đổi",
    "Cao nhất",
    "Thấp nhất",
    "Đặt mua",
    "Đặt bán"
];

export const priceTermsICE = ["11/19", "01/20", "03/20", "05/20"];

export const priceTermsNYC = ["12/19", "03/20", "05/20", "07/20"];
